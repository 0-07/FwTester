window.addEventListener("load", main, false);
//window.addEventListener("unload", cleanup, false);
function setStaticEventListeners() {
	open_options.addEventListener("click", function () {backgroundPage.openExtensionPage('options.html');}, false);
	close_popup.addEventListener("click", function () {window.close()}, false);
}
var backgroundPage = chrome.extension.getBackgroundPage();
var stateInfo = backgroundPage.popupStateInfo;

function main() {

	try {
	stateInfo.inPopUp = true;

	console.log("Calling event listener setter");
	setStaticEventListeners();
	console.log("Back from event listener setter");
	feedContainer.className = closedContainerClass;

	document.body.onunload = backgroundPage.popupClosed;

	var styleSheets = document.styleSheets;
	backgroundPage.applyStyleOptions(styleSheets);
	var popupHeight = options.popupHeight ? options.popupHeight : 504;
	var popupWidth = options.popupWidth ? options.popupWidth : 600;
	
	useGroups = (groups != undefined && options.useGroups);
	tabFeedsByURL = backgroundPage.tabFeedsByURL

	var done = false;
	if (options.openFirst) {
	   if (len == 1) {
			openDiv(feeds[0], false, false);
	   } else if (len > 1) {
			showNext({shiftKey: false});
	   }
	}
	} catch (e) {
		var stack = e.stack.replace(/^[^\(]+?[\n$]/gm, '')
			.replace(/^\s+at\s+/gm, '')
			.replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@')
			.split('\n');
		backgroundPage.logMsg('Popup processing error. type: ' + e.type + ", message: " + e.message + "\r\n" + "Stack Trace: " +stack);
	}
}
