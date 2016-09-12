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

DOMHelpers.addCell = function(content, _class) {
    var tableCell = document.createElement('td');
    tableCell.appendChild(document.createTextNode(content));
    tableCell.className = _class;
    return tableCell;
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

DOMHelpers.removeClass = function(elementId, className) {
  var element = document.getElementById(elementId);
  var cssClasses = element.className.replace(className,'').trim();
  element.className=cssClasses;
};

DOMHelpers.addClass = function(elementId, className) {
  var element = document.getElementById(elementId);
  var cssClasses = element.className.replace(className,'').trim();
  cssClasses+=' ' + className;
  element.className=cssClasses;
};



