App._metrics = function (window) {
	var analyticsEnabled = false;

	return {
		enableGoogleAnalytics : enableGoogleAnalytics ,
		watchPage             : watchPage
	};



	function enableGoogleAnalytics () {
		analyticsEnabled = true;
	}

	function addEvent (name, value, nonUserInteraction) {
		if ( !analyticsEnabled ) {
			return;
		}

		if ( !window._gaq ) {
			window._gaq = [];
		}

		window._gaq.push([
			'_trackEvent',
			'App.js', name, value,
			!!nonUserInteraction
		]);
	}

	function addPageView (pageName, pageID) {
		if ( !analyticsEnabled ) {
			return;
		}

		if ( !window._gaq ) {
			window._gaq = [];
		}

		var pathname = '/' + pageName;

		if (typeof pageID !== 'undefined') {
			pathname += '/' + pageID;
		}

		window._gaq.push([
			'_trackPageview' ,
			pathname
		]);
	}

	function watchPage (page, pageName, pageArgs) {
		var data;

		if ((typeof pageArgs === 'object') && (typeof pageArgs.id !== 'undefined')) {
			data = pageArgs.id + '';
		}

		page.addEventListener('appShow', function () {
			addPageView(pageName, data);
		}, false);
	}
}(window);
