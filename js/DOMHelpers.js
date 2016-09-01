var DOMHelpers = {};

DOMHelpers.addElementAsComponent=function(parentId, element) {
  DOMHelpers.removeChildren(parentId);
  var p = document.getElementById(parentId);
  p.appendChild(element);
};

DOMHelpers.addElementsToId=function(parentId, elementArr) {
  DOMHelpers.hideChildren(parentId);
  var p = document.getElementById(parentId);
  for (var elementIndex in elementArr) {
    element = elementArr[elementIndex];
    p.appendChild(element);
  }
};

DOMHelpers.hideChildren = function(parentId) {
  var p = document.getElementById(parentId);
  var children = p.childNotes;
  var numberOfChildren = children.length;
  var index=0;
  for (index; index<numberOfChildren; index++) {
    var child = children[index];
    child.style.display = "none";
  }
};

DOMHelpers.removeChildren = function(parentId) {
  var p = document.getElementById(parentId);
  var fc = p.firstChild;
  while (fc) {
    p.removeChild(fc);
    fc = p.firstChild;
  }
};

DOMHelpers.hide=function(elementId) {
  var p = document.getElementById(elementId);
  p.style.display = "none";
};

DOMHelpers.show=function(elementId) {
  var p = document.getElementById(elementId);
  p.style.display = "block";
};

DOMHelpers.removeClassfromClass = function(className, removeClassName) {
  var elements = document.getElementsByClassName(className);
  var numberOfElements = elements.length;
  for (var index=0; index<numberOfElements; index++) {
    element = elements[index];
    var cssClasses = element.className.replace(removeClassName,'').trim();
    element.className=cssClasses;
  }
};


