// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the url of a tab changes.
function checkForValidUrl(tabId, changeInfo, tab) {
  // If the letter 'g' is found in the tab's URL...
  if (tab.url.indexOf('freewar.de') > -1) {
    // ... show the page action.
    chrome.pageAction.show(tabId);
  }
};

// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(checkForValidUrl);
// End

// Anfang von der RSS-Teilextrtion 
var options = {
	styleOptions: {}
};
var popupStateInfo = {};

function init() {
	initExtensionFS();
	initGraphics();
	getManifest();
	earlyInitBookmarks();
	loadSavedState();
	setWorkerStrategy();
	changeMaxConcurrentRequests();

	autoUpdateFeeds();
	chrome.tabs.getAllInWindow(null, addAllTabs);
	console.log("RSS Live Links loaded");
	try {
		initBookmarks();
	} catch(e) { console.error("Error in 'initBookmarks': " + e); }
	saveOptions();
	loaded = true;
}

function initExtensionFS() {
	window.webkitRequestFileSystem(window.TEMPORARY, 1024 *1024, 
		function (fs) {
			console.log('Opened file system: ' + fs.name);
			extensionFS = fs;
		},

		function failFS(e) {
			console.error('Failed to open file system: ' + e);
		}
	);
}

function openExtensionPage(page, focus, win) {
	if (focus == undefined)
	{
		focus = true;
	}
	var URL = chrome.extension.getURL(page);
	if (win) {
		win.location = URL;
	} else {
		openInTab(URL, focus);
	}
}

function applyStyleOptions(styleSheets) {
	for (var styleClass in options.styleOptions) {
		var styles = options.styleOptions[styleClass];
		var declaration = "";
		for (var property in styles) {
			var propertyValue = styles[property];
			if (property == "font-family" && fontStrings[propertyValue]) {
				propertyValue = fontStrings[propertyValue];
			}
			declaration += property +":"+propertyValue+";";
		}

		styleSheets[styleSheets.length-1].addRule("." + styleClass, declaration);
	}
}

function openInTab(url, focus, reuseTab, delay, callback) {
	chrome.tabs.getAllInWindow(null, 
		function(views) {
			var i;
			for (i = 0; i < views.length && views[i].url != url; ++i);
			if (i < views.length) {
				chrome.tabs.update(views[i].id, {selected: focus}, callback);
			} else if (!(delay && options.fixPopupClosesBug)) {
				chrome.tabs.create({url: url, selected: focus, index: 5000}, callback);
			} else {
				delayedTabs.push({url: url, selected: focus, index: 5000});
			}
		}
	);
}
// Ende