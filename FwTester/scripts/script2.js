function GM_main () {
    $("select[name=z_pos_id] option").bind ("mousedown click", handleOptionClicks);

    function handleOptionClicks (zEvent) {
        _self                   = handleOptionClicks;
        _self.optionWasSelected = _self.optionWasSelected || false;

        if (zEvent.type == "mousedown") {
            _self.optionWasSelected = zEvent.target.selected;
        }
        else {//zEvent.type == "click"
            if (zEvent.target.selected  &&  _self.optionWasSelected) {
                //-- Double-click, so submit form:
                $(this).parents ("form").submit ();
            }
        }
    }
}

addJS_Node (
    null,
    "http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js",
    null,
    function () { addJS_Node (null, null, GM_main); }
);

function addJS_Node (text, s_URL, funcToRun, runOnLoad) {
    var D                                   = document;
    var scriptNode                          = D.createElement ('script');
    if (runOnLoad) {
        scriptNode.addEventListener ("load", runOnLoad, false);
    }
    scriptNode.type                         = "text/javascript";
    if (text)       scriptNode.textContent  = text;
    if (s_URL)      scriptNode.src          = s_URL;
    if (funcToRun)  scriptNode.textContent  = '(' + funcToRun.toString() + ')()';

    var targ = D.getElementsByTagName ('head')[0] || D.body || D.documentElement;
    targ.appendChild (scriptNode);
}
try{

var posIdSelects = document.querySelectorAll ("select[name=z_pos_id]");
for (var J = posIdSelects.length - 1;  J >= 0;  --J) {
    var numOpts  = posIdSelects[J].getElementsByTagName ("option").length;
    posIdSelects[J].setAttribute ("size", numOpts);
}
// End
}catch(e){}

// Start
try{

var posIdSelects = document.querySelectorAll ("select[name=p1]");
for (var J = posIdSelects.length - 1;  J >= 0;  --J) {
    var numOpts  = posIdSelects[J].getElementsByTagName ("option").length;
    posIdSelects[J].setAttribute ("size", numOpts);
}
// End
}catch(e){}
// Start
try{

var posIdSelects = document.querySelectorAll ("select[name=p2]");
for (var J = posIdSelects.length - 1;  J >= 0;  --J) {
    var numOpts  = posIdSelects[J].getElementsByTagName ("option").length;
    posIdSelects[J].setAttribute ("size", numOpts);
}
// End
}catch(e){}
// Start
try{

var posIdSelects = document.querySelectorAll ("select[name=p3]");
for (var J = posIdSelects.length - 1;  J >= 0;  --J) {
    var numOpts  = posIdSelects[J].getElementsByTagName ("option").length;
    posIdSelects[J].setAttribute ("size", numOpts);
}
// End
}catch(e){}
// Start
try{

var posIdSelects = document.querySelectorAll ("select[name=p4]");
for (var J = posIdSelects.length - 1;  J >= 0;  --J) {
    var numOpts  = posIdSelects[J].getElementsByTagName ("option").length;
    posIdSelects[J].setAttribute ("size", numOpts);
}
// End
}catch(e){}
// Start
try{

var posIdSelects = document.querySelectorAll ("select[name=p5]");
for (var J = posIdSelects.length - 1;  J >= 0;  --J) {
    var numOpts  = posIdSelects[J].getElementsByTagName ("option").length;
    posIdSelects[J].setAttribute ("size", numOpts);
}
// End
}catch(e){}
// Start
try{

var posIdSelects = document.querySelectorAll ("select[name=p6]");
for (var J = posIdSelects.length - 1;  J >= 0;  --J) {
    var numOpts  = posIdSelects[J].getElementsByTagName ("option").length;
    posIdSelects[J].setAttribute ("size", numOpts);
}
// End
}catch(e){}
// Start
try{

var posIdSelects = document.querySelectorAll ("select[name=p7]");
for (var J = posIdSelects.length - 1;  J >= 0;  --J) {
    var numOpts  = posIdSelects[J].getElementsByTagName ("option").length;
    posIdSelects[J].setAttribute ("size", numOpts);
}
// End
}catch(e){}
// Start
try{

var posIdSelects = document.querySelectorAll ("select[name=p8]");
for (var J = posIdSelects.length - 1;  J >= 0;  --J) {
    var numOpts  = posIdSelects[J].getElementsByTagName ("option").length;
    posIdSelects[J].setAttribute ("size", numOpts);
}
// End
}catch(e){}
// Start
try{

var posIdSelects = document.querySelectorAll ("select[name=p9]");
for (var J = posIdSelects.length - 1;  J >= 0;  --J) {
    var numOpts  = posIdSelects[J].getElementsByTagName ("option").length;
    posIdSelects[J].setAttribute ("size", numOpts);
}
// End
}catch(e){}
