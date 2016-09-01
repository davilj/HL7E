var View = {};

//display each line of file
View.displayMessage = function(parsedMessage) {
  var html_ul = HL7_Formatter.formatMessage(parsedMessage);
  DOMHelpers.addElementAsComponent("msg_content",html_ul);
  DOMHelpers.removeChildren("msg_segment");
  //DOMHelpers.hide("msg_segment_wnd");
  
  //for each segment
  for(var segmentIndex in parsedMessage.segments) {
    var segment = parsedMessage.segments[segmentIndex];
    var segmentId = "segment_" + segmentIndex;
    document.getElementById(segmentId).addEventListener("click", View.segmentClickFactory(segmentIndex));
    //menuItem for segments
    var segmentMenu = document.getElementById("msg_segment_menu");
    var liElement = document.createElement('li');
    liElement.id="menu_" + segmentIndex;
    liElement.className="menuItem_class";
    liElement.appendChild(document.createTextNode(segment.segmentName));
    liElement.addEventListener("click", View.menuClickFactory(segmentIndex));
    liElement.addEventListener("mouseenter", View.menuMouseEnterFacotry(segment));
    liElement.addEventListener("mouseleave", View.menuMouseLeaveFacotry());
    segmentMenu.appendChild(liElement);
    
    //segemntDetail
    var msg_segment = document.getElementById("msg_segment");
    var liElementSegment = document.createElement('li');
    liElementSegment.id="component_" + segmentIndex;
    liElementSegment.className='component_class';
    var detail = HL7_Formatter.formatSegmentInDetail(segment);
    liElementSegment.appendChild(detail);
    msg_segment.appendChild(liElementSegment);
  }
};

View.menuMouseEnterFacotry=function(segment) {
  return function(e) {
    console.log("Entering: ");
    console.log(e);
    var x = e.layerX;
    var y = e.layerY;
    var d = document.getElementById("segmentHover");
    d.style.position = "absolute";
    d.style.left = x + 'px';
    d.style.top = (y - 25) +'px';
    
    var doc = document.getElementById("segmentHover");
    
    DOMHelpers.removeChildren("segmentHover");
    var segmentDisplay = HL7_Formatter.formatSegment(segment);
    doc.appendChild(document.createTextNode(segmentDisplay));
    doc.style.display="block";
  };
};

View.menuMouseLeaveFacotry=function() {
  return function(e) {
    document.getElementById("segmentHover").style.display="none";
  };
};

View.menuClickFactory=function(visibleIndex) {
  return function() {
    //change menu
    var menuItems = document.getElementById("msg_segment_menu").childNodes;
    var numberOfMenuItems = menuItems.length;
    var index=0;
    for (index; index<numberOfMenuItems; index++) {
      var menuItem = menuItems[index];
      if (index==visibleIndex) {
        var cssClasses = menuItem.className.replace('msg_segment_menu_item_selected','').trim();
        cssClasses+=' msg_segment_menu_item_selected';
        menuItem.className=cssClasses;
      } else {
        menuItem.className=menuItem.className.replace('msg_segment_menu_item_selected','').trim();
      }
    }
    
    //hide all components
    var components = document.getElementById("msg_segment").childNodes;
    var numberOfComponents = components.length;
    var cIndex=0;
    for (cIndex; cIndex<numberOfComponents; cIndex++) {
      var component = components[cIndex];
      if (cIndex==visibleIndex) {
        component.style.display = "block";
      } else {
        component.style.display = "none";
      }
    }
  };
};

View.segmentClickFactory=function(segmentIndex) {
  return function(){
    DOMHelpers.hide("msg_content");
    var menuSelectionFunction = View.menuClickFactory(segmentIndex);
    menuSelectionFunction();
    DOMHelpers.show("msg_segment_wnd");
  };
};

//display selected file
View.displayEntryData=function(theEntry) {
  if (theEntry.isFile) {
    chrome.fileSystem.getDisplayPath(theEntry, function(path) {
      document.querySelector('#file_path').value = path;
    });
    theEntry.getMetadata(function(data) {
      document.querySelector('#file_size').textContent = data.size;
    });
  }
  else {
    document.querySelector('#file_path').value = theEntry.fullPath;
    document.querySelector('#file_size').textContent = "N/A";
  }
};


