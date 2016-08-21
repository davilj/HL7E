var DOMHelpers = {};

DOMHelpers.addElementAsComponent=function(parentId, element) {
  DOMHelpers.removeChildren(parentId);
  var p = document.getElementById(parentId);
  p.appendChild(element);
};

DOMHelpers.removeChildren = function(parentId) {
  var p = document.getElementById(parentId);
  var fc = p.firstChild;
  while (fc) {
    p.removeChild(fc);
    fc = p.firstChild;
  }
};

DOMHelpers.show=function(id) {
  var p = document.getElementById(id);
  p.style.display = 'block';
};

DOMHelpers.hide=function(id) {
  var p = document.getElementById(id);
  p.style.display = 'none';
};