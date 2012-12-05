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

	function addPageView (pageName) {
		if ( !analyticsEnabled ) {
			return;
		}

		if ( !window._gaq ) {
			window._gaq = [];
		}

		window._gaq.push([
			'_trackPageview' ,
			'/' + pageName
		]);
	}

	function watchPage (page, pageName) {
		page.addEventListener('appShow', function () {
			addPageView(pageName);
		}, false);
	}
}(window);
