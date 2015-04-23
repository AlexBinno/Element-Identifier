chrome.browserAction.onClicked.addListener(function (tab) {
	// inject JS
	chrome.tabs.executeScript(tab.id, {
		file: 'js/jquery-2.1.3.min.js'
	});
	chrome.tabs.executeScript(tab.id, {
		file: 'js/jquery.element-css-path.min.js'
	});
	chrome.tabs.executeScript(tab.id, {
		file: 'js/element-identifier.js',
		runAt: 'document_end'
	});
	// insert CSS
	chrome.tabs.insertCSS(tab.id, {
		file: 'css/element-identifier.css'
	});
});