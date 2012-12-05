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

	function watchPage (page, pageName, pageArgs) {
		var data;

		if ((typeof pageArgs === 'object') && (typeof pageArgs.id !== 'undefined')) {
			data = pageArgs.id + '';
		}

		page.addEventListener('appShow', function () {
			addEvent(pageName, data);
		}, false);
	}
}(window);
