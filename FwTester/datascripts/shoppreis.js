// ==UserScript==
// @name            Platypus-fwshop.ath.cx/freewar_sh
// @namespace       Platypus
// @match         http://fwshop.ath.cx/freewar_shoppreise.html
// ==/UserScript==
function do_platypus_script() {
smart_remove(window.document,document.evaluate('/HTML[1]/BODY[1]/FORM[1]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue,null,null,null);
smart_remove(window.document,document.evaluate('/HTML[1]/BODY[1]/DIV[1]/DL[1]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue,null,null,null);
smart_remove(window.document,document.evaluate('/HTML[1]/BODY[1]/DIV[2]/H1[1]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue,null,null,null);
smart_remove(window.document,document.evaluate('/HTML[1]/BODY[1]/DIV[2]/I[1]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue,null,null,null);
smart_remove(window.document,document.evaluate('/HTML[1]/BODY[1]/DIV[2]/P[1]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue,null,null,null);
smart_remove(window.document,document.evaluate('/HTML[1]/BODY[1]/IMG[1]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue,null,null,null);
smart_remove(window.document,document.evaluate('/HTML[1]/BODY[1]/DIV[2]/DIV[2]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue,null,null,null);
smart_remove(window.document,document.evaluate('/HTML[1]/BODY[1]/DIV[3]/P[1]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue,null,null,null);
smart_remove(window.document,document.evaluate('/HTML[1]/BODY[1]/DIV[3]/P[2]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue,null,null,null);
}; // Ends do_platypus_script
window.addEventListener("load", function() { do_platypus_script() }, false);

//
//  Mon Dec 19 15:59:37 2005 -- Scott R. Turner
//  Short, uncommented file containing all the code to implement Platypus
//  actions.  Can be "included" into the Platypus script.
//
// 
// 

function smart_remove(doc, node) {
    if (node.parentNode.childNodes.length == 1) {
smart_remove(doc, node.parentNode);
    } else {
remove_it(doc, node);
    };
};
function remove_it(doc, node) {
  if (doc == null || node == null) return;
  if (!node.parentNode) return;
  node.style.display = "none";
  doc.last_removed_node = node;
};
function platypus_do(win, func_name, o, other, other2, other3) {
    var func = eval(func_name);
    var doc = null;
    if (func == null) return;
    if (!o) {
Warning(platypusplatypuscouldntfi1+
func_name+platypusthisusuallyhappens);
    };
    doc = win.document;
    func(doc, o, other, other2, other3);
};

//.user.js