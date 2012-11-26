App._Pages = function () {
	var PAGE_NAME = 'data-page';

	var pages = {};

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

	function hasPage (pageName) {
		return (pageName in pages);
	}

	function clonePage (pageName) {
		return pages[pageName].cloneNode(true);
	}

	return {
		add   : addPage   ,
		has   : hasPage   ,
		clone : clonePage
	};
}();
