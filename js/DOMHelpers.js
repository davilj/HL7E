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

DOMHelpers.showAt = function(elementId, x, y, content) {
  
};

DOMHelpers.hide=function(elementId) {
  var p = document.getElementById(elementId);
  p.style.display = "none";
};

DOMHelpers.show=function(elementId) {
  var p = document.getElementById(elementId);
  p.style.display = "block";
};



