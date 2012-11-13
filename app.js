(function (window, document, ImageLoader, Swapper, Clickable, Dialog, Scrollable) {
	var PAGE_CLASS                        = 'app-page',
		PAGE_NAME                         = 'data-page',
		APP_IOS                           = 'app-ios',
		APP_ANDROID                       = 'app-android',
		APP_LOADED                        = 'app-loaded',
		PAGE_SHOW_EVENT                   = 'appShow',
		PAGE_HIDE_EVENT                   = 'appHide',
		PAGE_BACK_EVENT                   = 'appBack',
		PAGE_FORWARD_EVENT                = 'appForward',
		STACK_KEY                         = '__APP_JS_STACK__' + window.location.pathname,
		DEFAULT_TRANSITION_IOS            = 'slide-left',
		DEFAULT_TRANSITION_ANDROID        = 'implode-out',
		DEFAULT_TRANSITION_ANDROID_OLD    = 'fade-on',
		DEFAULT_TRANSITION_ANDROID_GHETTO = 'instant',
		REVERSE_TRANSITION                = {
			'instant'        : 'instant'        ,
			'fade'           : 'fade'           ,
			'fade-on'        : 'fade-off'       ,
			'fade-off'       : 'fade-on'        ,
			'scale-in'       : 'scale-out'      ,
			'scale-out'      : 'scale-in'       ,
			'rotate-left'    : 'rotate-right'   ,
			'rotate-right'   : 'rotate-left'    ,
			'cube-left'      : 'cube-right'     ,
			'cube-right'     : 'cube-left'      ,
			'swap-left'      : 'swap-right'     ,
			'swap-right'     : 'swap-left'      ,
			'explode-in'     : 'explode-out'    ,
			'explode-out'    : 'explode-in'     ,
			'implode-in'     : 'implode-out'    ,
			'implode-out'    : 'implode-in'     ,
			'slide-left'     : 'slide-right'    ,
			'slide-right'    : 'slide-left'     ,
			'slide-up'       : 'slide-down'     ,
			'slide-down'     : 'slide-up'       ,
			'slideon-left'   : 'slideoff-left'  ,
			'slideon-right'  : 'slideoff-right' ,
			'slideon-up'     : 'slideoff-up'    ,
			'slideon-down'   : 'slideoff-down'  ,
			'slideoff-left'  : 'slideon-left'   ,
			'slideoff-right' : 'slideon-right'  ,
			'slideoff-up'    : 'slideon-up'     ,
			'slideoff-down'  : 'slideon-down'
		};

	var App          = {},
		pages        = {},
		populators   = {},
		stack        = [],
		navQueue     = [],
		navLock      = false,
		initialised  = false,
		isAndroid401 = false,
		customEvents = null,
		platform, version, defaultTransition, reverseTransition,
		current, currentNode;



	function isArray (arr) {
		if (Array.isArray) {
			return Array.isArray(arr);
		}
		else {
			return Object.prototype.toString.call(arr) !== '[object Array]';
		}
	}

	function isNode (elem) {
		if ( !elem ) {
			return false;
		}

		try {
			return (elem instanceof Node) || (elem instanceof HTMLElement);
		} catch (err) {}

		if (typeof elem !== 'object') {
			return false;
		}

		if (typeof elem.nodeType !== 'number') {
			return false;
		}

		if (typeof elem.nodeName !== 'string') {
			return false;
		}

		return true;
	}

	function setTransform (elem, transform) {
		elem.style['-webkit-transform'] = transform;
		elem.style[   '-moz-transform'] = transform;
		elem.style[    '-ms-transform'] = transform;
		elem.style[     '-o-transform'] = transform;
		elem.style[        'transform'] = transform;
	}

	function setTransition (elem, transition) {
		if (transition) {
			elem.style['-webkit-transition'] = '-webkit-'+transition;
			elem.style[   '-moz-transition'] =    '-moz-'+transition;
			elem.style[    '-ms-transition'] =     '-ms-'+transition;
			elem.style[     '-o-transition'] =      '-o-'+transition;
			elem.style[        'transition'] =            transition;
		}
		else {
			elem.style['-webkit-transition'] = '';
			elem.style[   '-moz-transition'] = '';
			elem.style[    '-ms-transition'] = '';
			elem.style[     '-o-transition'] = '';
			elem.style[        'transition'] = '';
		}
	}

	function getStyles (elem, notComputed) {
		var styles;

		if (notComputed) {
			styles = elem.style;
		}
		else {
			styles = document.defaultView.getComputedStyle(elem, null);
		}

		return {
			display          : styles.display          ,
			opacity          : styles.opacity          ,
			paddingRight     : styles.paddingRight     ,
			paddingLeft      : styles.paddingLeft      ,
			marginRight      : styles.marginRight      ,
			marginLeft       : styles.marginLeft       ,
			borderRightWidth : styles.borderRightWidth ,
			borderLeftWidth  : styles.borderLeftWidth  ,
			top              : styles.top              ,
			left             : styles.left             ,
			height           : styles.height           ,
			width            : styles.width            ,
			position         : styles.position
		};
	}

	function getTotalWidth (styles) {
		var width = 0;
		width += parseInt(styles.width            || 0);
		width += parseInt(styles.paddingLeft      || 0);
		width += parseInt(styles.paddingRight     || 0);
		width += parseInt(styles.borderLeftWidth  || 0);
		width += parseInt(styles.borderRightWidth || 0);
		width += parseInt(styles.marginLeft       || 0);
		width += parseInt(styles.marginRight      || 0);
		return width;
	}



	function setDefaultTransition (transition) {
		defaultTransition = transition;
		reverseTransition = REVERSE_TRANSITION[defaultTransition];
	}

	function config () {
		if (match = /\bCPU.*OS (\d+(_\d+)?)/i.exec(navigator.userAgent)) {
			platform = 'ios';
			version = parseFloat( match[1] );
			document.body.className += ' ' + APP_IOS;
			setDefaultTransition(DEFAULT_TRANSITION_IOS);
		}
		else if (match = /\bAndroid (\d+(\.\d+(\.\d+)?)?)/.exec(navigator.userAgent)) {
			platform = 'android';
			version = parseFloat( match[1] );
			document.body.className += ' ' + APP_ANDROID;

			if (match[1] === '4.0.1') {
				isAndroid401 = true;
				setDefaultTransition(DEFAULT_TRANSITION_ANDROID_GHETTO);
			}
			else if (version >= 4) {
				setDefaultTransition(DEFAULT_TRANSITION_ANDROID);
			}
			else if ((version < 2.3) || /LT15a/i.test(navigator.userAgent)) {
				setDefaultTransition(DEFAULT_TRANSITION_ANDROID_GHETTO);
			}
			else {
				setDefaultTransition(DEFAULT_TRANSITION_ANDROID_OLD);
			}
		}
	}

	function init () {
		if (initialised) {
			return;
		}
		initialised = true;

		var pageNodes = document.getElementsByClassName(PAGE_CLASS),
			page, pageName, match;

		for (var i=pageNodes.length; i--;) {
			addPage( pageNodes[i] );
		}

		document.body.className += ' ' + APP_LOADED;
	}

	function addPage (page, pageName) {
		if (pageName) {
			page.setAttribute(PAGE_NAME, pageName);
		}
		else {
			pageName = page.getAttribute(PAGE_NAME);
		}

		if ((typeof pageName === 'string') && (pageName.length !== 0)) {
			page.parentNode.removeChild(page);
			pages[pageName] = page.cloneNode(true);
		}
	}



	function startPageGeneration (pageName, args, pageManager) {
		init();

		if ( !(pageName in pages) ) {
			throw TypeError(pageName + ' is not a known page');
		}

		var page           = pages[pageName].cloneNode(true),
			pagePopulators = populators[pageName] || [];

		insureCustomEventing(page, [PAGE_SHOW_EVENT, PAGE_HIDE_EVENT, PAGE_BACK_EVENT, PAGE_FORWARD_EVENT]);

		setContentHeight(page);

		Array.prototype.forEach.call(
			page.querySelectorAll('.app-button'),
			function (button) {
				Clickable(button);

				var target = button.getAttribute('data-target'),
					back   = button.getAttribute('data-back');

				if (back) {
					stickyButton(button, function (callback) {
						return navigateBack({}, callback);
					});
				}
				else if (target) {
					stickyButton(button, function (callback) {
						return loadPage(target, {}, {}, callback);
					});
				}
			}
		);

		pagePopulators.forEach(function (data) {
			var populator = data[0];
			populator.call(pageManager, page, args);
		});

		Array.prototype.forEach.call(
			page.querySelectorAll('img'),
			function (image) {
				if ( !image.getAttribute('data-auto-load') ) {
					return;
				}

				var minWait = (platform === 'android' ? 400 : 0),
					url     = image.src;
				image.src   = '';

				ImageLoader(image, url, minWait);
			}
		);

		if (isAndroid401) {
			setupScrollers(page);
		}

		var topbar = page.querySelector('.app-topbar');

		if (topbar) {
			topbar.addEventListener('DOMNodeInsertedIntoDocument', function () {
				fixPageTitle(this);
			}, false);
		}

		return page;
	}

	function fixPageTitle (topbar) {
		if ( !topbar ) {
			return;
		}

		var title = topbar.querySelector('.app-title');

		if ( !title ) {
			return;
		}

		if ( !title.getAttribute('data-autosize') ) {
			return;
		}

		var margin      = 0,
			leftButton  = topbar.querySelector('.left.app-button'),
			rightButton = topbar.querySelector('.right.app-button');

		if (leftButton) {
			var leftStyles = getStyles(leftButton),
				leftPos    = getTotalWidth(leftStyles) + parseInt(leftStyles.left || 0) + 4;
			margin = Math.max(margin, leftPos);
		}

		if (rightButton) {
			var rightStyles = getStyles(rightButton),
				rightPos    = getTotalWidth(rightStyles) + parseInt(rightStyles.right || 0) + 4;
			margin = Math.max(margin, rightPos);
		}

		title.style.width = (window.innerWidth-margin*2) + 'px';
	}

	function finishPageGeneration (pageName, page, args, pageManager) {
		if ( !isAndroid401 ) {
			setupScrollers(page);
		}
	}

	function setupScrollers (page) {
		Array.prototype.forEach.call(
			page.querySelectorAll('.app-content'),
			function (content) {
				if ( !content.getAttribute('data-no-scroll') ) {
					Scrollable(content);
					content.className += ' app-scrollable';
				}
			}
		);

		Array.prototype.forEach.call(
			page.querySelectorAll('[data-scrollable]'),
			function (content) {
				Scrollable(content);
				content.className += ' app-scrollable';
			}
		);
	}

	function startPageDestruction (pageName, page, args, pageManager) {
		Array.prototype.forEach.call(
			page.querySelectorAll('*'),
			function (elem) {
				elem.style['-webkit-overflow-scrolling'] = '';
			}
		);
	}

	function finishPageDestruction (pageName, page, args, pageManager) {
		if ( !(pageName in pages) ) {
			throw TypeError(pageName + ' is not a known page');
		}

		var pagePopulators = populators[pageName] || [];

		pagePopulators.forEach(function (data) {
			var unpopulator = data[1];
			unpopulator.call(pageManager, page, args);
		});
	}

	function stickyButton (button, holdFunction) {
		button.addEventListener('click', function () {
			var lock        = false,
				activeClass = button.getAttribute('data-clickable-class') || 'active',
				value;
			button.disabled = true;
			button.className += ' ' + activeClass;

			try {
				value = holdFunction(cleanUp);
			}
			catch (err) {
				if (window.console && window.console.error) {
					window.console.error(err + '');
				}

				cleanUp();
			}

			if (value === false) {
				cleanUp();
			}

			function cleanUp () {
				if (lock) {
					return;
				}
				lock = true;

				button.disabled = false;
				button.className = button.className.replace(new RegExp('\\b'+activeClass+'\\b', 'g'), '');
			}
		}, false);
	}



	function navigate (handler) {
		if (navLock) {
			navQueue.push(handler);
			return false;
		}

		navLock = true;

		handler(function () {
			navLock = false;
			setTimeout(processNavigationQueue, 0);
			saveStack();
		});

		return true;
	}



	function generatePage (pageName, args) {
		var pageManager = {},
			page        = startPageGeneration(pageName, args, pageManager);

		finishPageGeneration(pageName, page, args, pageManager);

		return page;
	}

	function loadPage (pageName, args, options, callback) {
		navigate(function (unlock) {
			var pageManager = {},
				page        = startPageGeneration(pageName, args, pageManager);

			if ( !current ) {
				App.restore = null;
				document.body.appendChild(page);
				setTimeout(finish, 0);
			}
			else {
				savePageScrollPosition(currentNode);

				var newOptions = {};
				for (var key in options) {
					newOptions[key] = options[key];
				}
				performTransition(page, newOptions, finish);
			}

			var oldNode = currentNode;

			current     = pageName;
			currentNode = page;
			stack.push([ pageName, page, options, args, pageManager ]);

			if (oldNode) {
				firePageEvent(oldNode, PAGE_FORWARD_EVENT);
			}

			function finish () {
				savePageScrollStyle(oldNode);
				finishPageGeneration(pageName, page, args, pageManager);

				unlock();
				callback();

				if (oldNode) {
					firePageEvent(oldNode, PAGE_HIDE_EVENT);
				}
				firePageEvent(page, PAGE_SHOW_EVENT);
			}
		});

		if ( !(pageName in pages) ) {
			return false;
		}
	}

	function navigateBack (options, callback) {
		if ( Dialog.status() ) {
			Dialog.close();
			return;
		}

		var stackLength = stack.length;

		var navigatedImmediately = navigate(function (unlock) {
			if (stack.length < 2) {
				unlock();
				return;
			}

			var oldPage    = stack.pop(),
				data       = stack[stack.length - 1],
				pageName   = data[0],
				page       = data[1],
				oldOptions = oldPage[2];

			firePageEvent(oldPage[1], PAGE_BACK_EVENT);

			setContentHeight(page);

			startPageDestruction(oldPage[0], oldPage[1], oldPage[3], oldPage[4]);

			restorePageScrollPosition(page);

			var newOptions = {};
			for (var key in oldOptions) {
				newOptions[key] = oldOptions[key];
			}
			for (var key in options) {
				newOptions[key] = options[key];
			}

			performTransition(page, newOptions, function () {
				restorePageScrollStyle(page);

				firePageEvent(oldPage[1], PAGE_HIDE_EVENT);
				firePageEvent(page, PAGE_SHOW_EVENT);

				setTimeout(function () {
					finishPageDestruction(oldPage[0], oldPage[1], oldPage[3], oldPage[4]);

					unlock();
					callback();
				}, 0);
			}, true);

			current     = pageName;
			currentNode = page;
		});

		if (navigatedImmediately && (stackLength < 2)) {
			return false;
		}
	}



	function fetchStack () {
		return stack.slice().map(function (pageData) {
			var pageName = pageData[0],
				pageArgs = {};

			for (var key in pageData[3]) {
				pageArgs[key] = pageData[3][key];
			}

			return [ pageName, pageArgs ];
		});
	}

	// you must manually save the stack if you choose to use this method
	function removeFromStackNow (startIndex, endIndex) {
		var deadPages = stack.splice(startIndex, endIndex - startIndex);

		deadPages.forEach(function (pageData) {
			startPageDestruction(pageData[0], pageData[1], pageData[3], pageData[4]);
			finishPageDestruction(pageData[0], pageData[1], pageData[3], pageData[4]);
		});
	}

	function removeFromStack (startIndex, endIndex) {
		navigate(function (unlock) {
			removeFromStackNow(startIndex, endIndex);
			unlock();
		});
	}

	// you must manually save the stack if you choose to use this method
	function addToStackNow (index, newPages) {
		var pageDatas = [];

		newPages.forEach(function (pageData) {
			var pageManager = {},
				page        = startPageGeneration(pageData[0], pageData[1], pageManager);

			finishPageGeneration(pageData[0], page, pageData[1], pageManager);

			pageDatas.push([pageData[0], page, pageData[2], pageData[1], pageManager]);
		});

		pageDatas.unshift(0);
		pageDatas.unshift(index);
		Array.prototype.splice.apply(stack, pageDatas);
	}

	function addToStack (index, newPages) {
		navigate(function (unlock) {
			addToStackNow(index, newPages);
			unlock();
		});
	}



	function processNavigationQueue () {
		if ( navQueue.length ) {
			navigate( navQueue.shift() );
		}

	}



	function supportsCustomEventing () {
		if (customEvents === null) {
			try {
				var elem = document.createElement('div'),
					evt  = document.createEvent('CustomEvent');
				evt.initEvent('fooBarFace', false, true);
				elem.dispatchEvent(evt);
				customEvents = true;
			}
			catch (err) {
				customEvents = false;
			}
		}

		return customEvents;
	}

	function insureCustomEventing (page, names) {
		if (page._brokenEvents || supportsCustomEventing()) {
			return;
		}

		page._brokenEvents = true;
		page._addEventListener    = page.addEventListener;
		page._removeEventListener = page.removeEventListener;

		var listeners = {};

		names.forEach(function (name) {
			listeners[name] = [];
		});

		page.addEventListener = function (name, listener) {
			if (names.indexOf(name) === -1) {
				page._addEventListener.apply(this, arguments);
				return;
			}

			var eventListeners = listeners[name];

			if (eventListeners.indexOf(listener) === -1) {
				eventListeners.push(listener);
			}
		};

		page.removeEventListener = function (name, listener) {
			if (names.indexOf(name) === -1) {
				page._removeEventListener.apply(this, arguments);
				return;
			}

			var eventListeners = listeners[name],
				index          = eventListeners.indexOf(listener);

			if (index !== -1) {
				eventListeners.splice(index, 1);
			}
		};

		page._trigger = function (name) {
			if (names.indexOf(name) === -1) {
				return;
			}

			listeners[name].forEach(function (listener) {
				setTimeout(function () {
					listener.call(page, {});
				}, 0);
			});
		};
	}

	function firePageEvent (page, eventName) {
		if (page._brokenEvents) {
			page._trigger(eventName);
			return;
		}

		var event = document.createEvent('CustomEvent');
		event.initEvent(eventName, false, true);
		page.dispatchEvent(event);
	}



	// blocks UI interaction during some aysnchronous task
	// is not locked because multiple calls dont effect eachother
	function uiBlockedTask (task) {
		var taskComplete = false;

		var clickBlocker = document.createElement('div');
		clickBlocker.className = 'app-clickblocker';
		document.body.appendChild(clickBlocker);

		task(function () {
			if (taskComplete) {
				return;
			}
			taskComplete = true;

			document.body.removeChild(clickBlocker);
		});
	}



	function shouldUseNativeIOSTransition (options) {
		if (platform !== 'ios') {
			return false;
		}

		if (options.transition === 'slide-left') {
			return true;
		}
		else if (options.transition === 'slide-right') {
			return true;
		}
		else {
			return false;
		}
	}

	function performTransition (page, options, callback, reverse) {
		options.transition = options.transition || defaultTransition;
		if (reverse) {
			options.transition = REVERSE_TRANSITION[options.transition] || options.transition;
		}

		uiBlockedTask(function (unblockUI) {
			if ( !shouldUseNativeIOSTransition(options) ) {
				Swapper(currentNode, page, options, cleanup);
			}
			else {
				performNativeIOSTransition(page, options, cleanup);
			}

			function cleanup () {
				unblockUI();
				callback();
			}
		});
	}

	function performNativeIOSTransition (page, options, callback) {
		var oldPage        = currentNode,
			currentBar     = oldPage.querySelector('.app-topbar'),
			currentContent = oldPage.querySelector('.app-content'),
			newBar         = page.querySelector('.app-topbar'),
			newContent     = page.querySelector('.app-content'),
			currentTitle, newTitle;

		if (currentBar) {
			currentTitle = currentBar.querySelector('.app-title');
		}
		if (newBar) {
			newTitle = newBar.querySelector('.app-title');
		}

		if (!currentBar || !newBar || !currentContent || !newContent) {
			// proper iOS transition not possible, fallback to normal
			Swapper(oldPage, page, options, callback);
			return;
		}

		performNativeIOSTitleTransition(currentTitle, newTitle, (options.transition === 'slide-left'));

		var count = 2;

		Swapper(currentBar    , newBar    , 'fade-off', swapDone);
		Swapper(currentContent, newContent, options   , swapDone);

		function swapDone () {
			if (--count === 0) {
				cleanup();
			}
		}

		function cleanup () {
			page.appendChild(newBar    );
			page.appendChild(newContent);
			oldPage.appendChild(currentBar    );
			oldPage.appendChild(currentContent);

			oldPage.parentNode.insertBefore(page, oldPage);
			oldPage.parentNode.removeChild(oldPage);

			callback();
		}
	}

	function performNativeIOSTitleTransition (currentTitle, newTitle, reverse) {
		var slideLength = window.innerWidth * 0.5,
			oldStyles, newStyles;

		// setTimeout so that titles are in DOM when styles are calculated
		setTimeout(function () {
			if (currentTitle) {
				oldStyles = getStyles(currentTitle);
			}
			if (newTitle) {
				newStyles = getStyles(newTitle);
			}

			setInitialStyles(function () {
				triggerAnimation();
				setTimeout(clearStyles, 300);
			});
		}, 0);

		function setInitialStyles (callback) {
			if (currentTitle) {
				setTransform(currentTitle, 'translate3d(0,0,0)');
				currentTitle.style['opacity'] = '1';
			}
			if (newTitle) {
				setTransform(newTitle, 'translate3d('+(reverse ? slideLength : -slideLength)+'px,0,0)');
				newTitle.style['opacity'] = '0';
			}

			// setTimeout to prevent animation of initial positions
			setTimeout(function () {
				var transition = 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out';
				if (currentTitle) {
					setTransition(currentTitle, transition);
				}
				if (newTitle) {
					setTransition(newTitle, transition);
				}

				setTimeout(function () {
					callback();
				}, 0);
			}, 0);
		}

		function triggerAnimation () {
			if (currentTitle) {
				setTransform(currentTitle, 'translate3d('+(reverse ? -slideLength : slideLength)+'px,0,0)');
				currentTitle.style['opacity'] = '0';
			}
			if (newTitle) {
				setTransform(newTitle, 'translate3d(0,0,0)');
				newTitle.style['opacity'] = '1';
			}
		}

		function clearStyles () {
			if (currentTitle) {
				setTransition(currentTitle, '');
			}
			if (newTitle) {
				setTransition(newTitle, '');
			}

			setTimeout(function () {
				if (currentTitle) {
					setTransform(currentTitle, '');
					currentTitle.style['opacity'] = oldStyles.opacity;
				}
				if (newTitle) {
					setTransform(newTitle, '');
					newTitle.style['opacity'] = newStyles.opacity;
				}
			}, 0);
		}
	}

	function getScrollableElems (page) {
		page = page || currentNode;

		if ( !page ) {
			return [];
		}

		var elems = [];

		Array.prototype.forEach.call(
			page.querySelectorAll('.app-scrollable'),
			function (elem) {
				if (elem._scrollable) {
					elems.push(elem);
				}
			}
		);

		return elems;
	}

	function savePageScrollPosition (page) {
		Array.prototype.forEach.call(
			getScrollableElems(page),
			function (elem) {
				if (elem._iScroll) {
					return;
				}

				var scrollTop = elem._scrollTop();
				elem.setAttribute('data-last-scroll', scrollTop+'');
			}
		);
	}

	function savePageScrollStyle (page) {
		Array.prototype.forEach.call(
			getScrollableElems(page),
			function (elem) {
				if (elem._iScroll) {
					return;
				}

				var scrollStyle = elem.style['-webkit-overflow-scrolling'] || '';
				elem.style['-webkit-overflow-scrolling'] = '';
				elem.setAttribute('data-scroll-style', scrollStyle);
			}
		);
	}

	function restorePageScrollPosition (page, noTimeout) {
		Array.prototype.forEach.call(
			getScrollableElems(page),
			function (elem) {
				if (elem._iScroll) {
					return;
				}

				var scrollTop = parseInt( elem.getAttribute('data-last-scroll') );

				if (scrollTop) {
					if (noTimeout) {
						elem._scrollTop(scrollTop);
					}
					else {
						setTimeout(function () {
							elem._scrollTop(scrollTop);
						}, 0);
					}
				}
			}
		);
	}

	function restorePageScrollStyle (page) {
		Array.prototype.forEach.call(
			getScrollableElems(page),
			function (elem) {
				if (elem._iScroll) {
					return;
				}

				var scrollStyle = elem.getAttribute('data-scroll-style') || '';

				if (scrollStyle) {
					elem.style['-webkit-overflow-scrolling'] = scrollStyle;
				}

			}
		);

		restorePageScrollPosition(page, true);
	}



	function addPopulator (pageName, populator, unpopulator) {
		if ( !populators[pageName] ) {
			populators[pageName] = [];
		}

		populators[pageName].push([populator, unpopulator]);
	}



	function setContentHeight (page) {
		var topbar  = page.querySelector('.app-topbar'),
			content = page.querySelector('.app-content');

		if ( !content ) {
			return;
		}

		var height = window.innerHeight;

		if ( !topbar ) {
			content.style.height = height + 'px';
			return;
		}

		var topbarStyles = document.defaultView.getComputedStyle(topbar, null),
			topbarHeight = (platform === 'android') ? 48 : 44;

		if (topbarStyles.height) {
			topbarHeight = parseInt(topbarStyles.height) || 0;
		}

		content.style.height = (height - topbarHeight) + 'px';
	}

	function setupListeners () {
		function fixSizing () {
			currentNode && setContentHeight(currentNode);
		}
		function triggerSizeFix () {
			fixSizing();
			setTimeout(fixSizing, 0);
			setTimeout(fixSizing, 10);
			setTimeout(fixSizing, 100);
		}

		window.addEventListener('orientationchange', triggerSizeFix);
		window.addEventListener('resize'           , triggerSizeFix);
		window.addEventListener('load'             , triggerSizeFix);
		setTimeout(triggerSizeFix, 0);

		return triggerSizeFix;
	}



	function saveStack () {
		try {
			var storedStack = stack.map(function (pageData) {
				return [ pageData[0], pageData[3], pageData[2] ];
			});

			localStorage[STACK_KEY] = JSON.stringify(storedStack);
		}
		catch (err) {}
	}

	function setupRestoreFunction () {
		var storedStack, lastPage;

		try {
			storedStack = JSON.parse( localStorage[STACK_KEY] );
			lastPage    = storedStack.pop();
		}
		catch (err) {
			return;
		}

		return function (callback) {
			switch (typeof callback) {
				case 'undefined':
					callback = function () {};
				case 'function':
					break;

				default:
					throw TypeError('restore callback must be a function if defined, got ' + callback);
			}

			init();

			if ( !(lastPage[0] in pages) ) {
				throw TypeError(lastPage[0] + ' is not a known page');
			}

			storedStack.forEach(function (pageData) {
				if ( !(pageData[0] in pages) ) {
					throw TypeError(pageData[0] + ' is not a known page');
				}
			});

			try {
				addToStackNow(0, storedStack);
			}
			catch (err) {
				removeFromStackNow(0, stack.length);
				throw Error('failed to restore stack');
			}

			saveStack();

			try {
				loadPage(lastPage[0], lastPage[1], lastPage[2], callback);
			}
			catch (err) {
				removeFromStackNow(0, stack.length);
				throw Error('failed to restore stack');
			}
		};
	}



	App.current = function () {
		return current;
	};



	App.add = function (pageName, page) {
		if (typeof pageName !== 'string') {
			page     = pageName;
			pageName = undefined;
		}

		if ( !isNode(page) ) {
			throw TypeError('page template node must be a DOM node, got ' + page);
		}

		addPage(page, pageName);
	};



	App.populator = function (pageName, populator, unpopulator) {
		if (typeof pageName !== 'string') {
			throw TypeError('page name must be a string, got ' + pageName);
		}

		if (typeof populator !== 'function') {
			throw TypeError('page populator must be a function, got ' + populator);
		}

		switch (typeof unpopulator) {
			case 'undefined':
				unpopulator = function () {};
				break;

			case 'function':
				break;

			default:
				throw TypeError('page unpopulator must be a function, got ' + unpopulator);
		}

		addPopulator(pageName, populator, unpopulator);
	};



	App.load = function (pageName, args, options, callback) {
		if (typeof pageName !== 'string') {
			throw TypeError('page name must be a string, got ' + pageName);
		}

		switch (typeof args) {
			case 'function':
				callback = args;
				args     = {};
				options  = {};
				break;

			case 'undefined':
				args = {};
				break;

			case 'string':
				options = args;
				args    = {};
				break;

			case 'object':
				break;

			default:
				throw TypeError('page arguments must be an object if defined, got ' + args);
		}

		switch (typeof options) {
			case 'function':
				callback = options;
				options  = {};
				break;

			case 'undefined':
				options = {};
				break;

			case 'string':
				options = { transition : options };
				break;

			case 'object':
				break;

			default:
				throw TypeError('options must be an object if defined, got ' + options);
		}

		switch (typeof callback) {
			case 'undefined':
				callback = function () {};
				break;

			case 'function':
				break;

			default:
				throw TypeError('callback must be a function if defined, got ' + callback);
		}

		loadPage(pageName, args, options, callback);
	};



	App.back = function (options, callback) {
		switch (typeof options) {
			case 'function':
				callback = options;
				options  = {};
				break;

			case 'undefined':
				options  = {};
				break;

			case 'string':
				options = { transition : options };
				break;

			case 'object':
				break;

			default:
				throw TypeError('options must be an object if defined, got ' + options);
		}

		switch (typeof callback) {
			case 'undefined':
				callback = function () {};
				break;

			case 'function':
				break;

			default:
				throw TypeError('callback must be a function if defined, got ' + callback);
		}

		return navigateBack(options, callback);
	};



	App.generate = function (pageName, args) {
		if (typeof pageName !== 'string') {
			throw TypeError('page name must be a string, got ' + pageName);
		}

		switch (typeof args) {
			case 'undefined':
				args = {};
				break;

			case 'object':
				break;

			default:
				throw TypeError('page arguments must be an object if defined, got ' + args);
		}

		return generatePage(pageName, args);
	};



	App.setDefaultTransition = function (transition) {
		if (typeof transition === 'object') {
			switch (platform) {
				case 'android':
					transition = transition.android;
					if ((isAndroid401 || version < 4) && transition.androidFallback) {
						transition = transition.androidFallback;
					}
					break;

				case 'ios':
					transition = transition.ios;
					if ((version < 5) && transition.iosFallback) {
						transition = transition.iosFallback;
					}
					break;

				default:
					transition = transition.fallback;
					break;
			}

			if ( !transition ) {
				return;
			}
		}

		if (typeof transition !== 'string') {
			throw TypeError('transition must be a string if defined, got ' + transition);
		}

		if ( !(transition in REVERSE_TRANSITION) ) {
			throw TypeError('invalid transition type, got ' + transition);
		}

		setDefaultTransition(transition);
	};



	App.getStack = function () {
		return fetchStack();
	};



	App.removeFromStack = function (startIndex, endIndex) {
		// minus 1 because last item on stack is current page (which is untouchable)
		var stackSize = stack.length - 1;

		switch (typeof startIndex) {
			case 'undefined':
				startIndex = 0;
				break;

			case 'number':
				if (Math.abs(startIndex) > stackSize) {
					throw TypeError('absolute start index cannot be greater than stack size, got ' + startIndex);
				}
				if (startIndex < 0) {
					startIndex = stackSize + startIndex;
				}
				break;

			default:
				throw TypeError('start index must be a number if defined, got ' + startIndex);
		}

		switch (typeof endIndex) {
			case 'undefined':
				endIndex = stackSize;
				break;

			case 'number':
				if (Math.abs(endIndex) > stackSize) {
					throw TypeError('absolute end index cannot be greater than stack size, got ' + endIndex);
				}
				if (endIndex < 0) {
					endIndex = stackSize + endIndex;
				}
				break;

			default:
				throw TypeError('end index must be a number if defined, got ' + endIndex);
		}

		if (startIndex > endIndex) {
			throw TypeError('start index cannot be greater than end index');
		}

		removeFromStack(startIndex, endIndex);
	};



	App.addToStack = function (index, newPages) {
		// minus 1 because last item on stack is current page (which is untouchable)
		var stackSize = stack.length - 1;

		switch (typeof index) {
			case 'undefined':
				index = 0;
				break;

			case 'number':
				if (Math.abs(index) > stackSize) {
					throw TypeError('absolute index cannot be greater than stack size, got ' + index);
				}
				if (index < 0) {
					index = stackSize + index;
				}
				break;

			default:
				throw TypeError('index must be a number if defined, got ' + index);
		}

		if ( !isArray(newPages) ) {
			throw TypeError('added pages must be an array, got ' + newPages);
		}

		newPages = newPages.slice();

		newPages.forEach(function (page, i) {
			if (typeof page === 'string') {
				page = [page, {}];
			}
			else if ( isArray(page) ) {
				page = page.slice();
			}
			else {
				throw TypeError('page description must be an array (page name, arguments), got ' + page);
			}

			if (typeof page[0] !== 'string') {
				throw TypeError('page name must be a string, got ' + page[0]);
			}

			switch (typeof page[1]) {
				case 'undefined':
					page[1] = {};
					break;

				case 'object':
					break;

				default:
					throw TypeError('page arguments must be an object if defined, got ' + page[1]);
			}

			switch (typeof page[2]) {
				case 'undefined':
					page[2] = {};
					break;

				case 'object':
					break;

				default:
					throw TypeError('page options must be an object if defined, got ' + page[2]);
			}

			newPages[i] = page;
		});

		addToStack(index, newPages);
	};



	App.dialog = Dialog;





	config();


	App.platform = platform;
	App.platformVersion = version;
	App.restore = setupRestoreFunction();
	App._layout = setupListeners();

	window.App = App;
})(window, document, ImageLoader, Swapper, Clickable, Dialog, Scrollable);
