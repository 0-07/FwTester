var localStoragePrefix = "script_";
var LS_options  = localStoragePrefix + "options";
var Options = {
    Scripts : [
        {
            name : "Schnell-Verjagen<br> <font size='1'> Fuegt 'Verjagen' neben dem Link zum Schnellangriff hinzu. </font> <br> ",
            path : "scripts/script1.js",
            enable : true
        },
        {
            name : "Dropdownlist-Doppelklick-Expander<br> <font size='1'> Erweitert einige Dropdown-Listen und setzt den Wert der ausgewaehlte Option wenn man nochmal draufklickt.  </font> <br> ",
            path : "scripts/script2.js",
            enable : true
        },
        {
            name : "K-Style per JavaScript<br> ",
            path : "scripts/script3.js",
            enable : false
        },
        {
            name : "Num-Pad Tastensteuerung <br> <br> <font size='1'> Ermoeglicht mit dem Num-Pad das Feld zu wechseln. <br>(Funktioniert jedoch nur wenn man vorher in Map-Frame geklickt hat.)</font> <br> ",
            path : "scripts/script4.js",
            enable : false
        },
        {
            name : "Nervige Nachricht<br> ",
            path : "scripts/script5.js",
            enable : true
        }
    ]
};

function DB_setValue(name, value, callback) {
    var obj = {};
    obj[name] = value;
    console.log("ayarlar kaydedildi");
    console.log(obj);
    chrome.storage.local.set(obj, function() {
        if(callback) callback();
    });
}

function DB_load(callback) {
    chrome.storage.local.get(LS_options, function(r) {
        if ($.isEmptyObject(r[LS_options])) {
            DB_setValue(LS_options, Options, callback);
        } else {
            Options = r[LS_options];
            callback();
        }
    });
}

function DB_save(callback) {
    DB_setValue(LS_options, Options, function() {
        if(callback) callback();
    });
}

function DB_clear(callback) {
    chrome.storage.local.remove(LS_options, function() {
        if(callback) callback();
    });
}