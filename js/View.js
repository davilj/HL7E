

var View = {};

View.init = function() {
  MsgSender.Init();
  MenuBar.Init();
  MsgSegment.Init();
  
  //tmp
  EventBus.subscribe(Messages.MsgDisplay,function(msg) {
    var type = msg['type'];
    if (type=='open') {
      var entry=msg['file'];
      View.loadFileEntry(entry);
      EventBus.publish(Messages.MenuBar, Messages.MsgOpened);
    }
    
    if (type=='save') {
      var blob=msg['data'];
      var writableEntry=msg['file'];
      File.writeFileEntry(writableEntry, blob, function(e) {
        //DOMHelpers.hide("save_message");
        DOMHelpers.removeClass("msg_segment_menu", "save_required");
        DOMHelpers.addClass("msg_segment_menu", "menu");
      });
    }
  });
  
  //Sending messages
  EventBus.subscribe(Messages.SendingMsg, function(msg) {
    var type = msg['type'];
    if (type==Messages.SendMsg) {
      var ip = msg['ip'];
      var port = msg['port'];
      Network.setConnection(ip, port);
      var text = HL7.toText(View.parsedMessage);
      Network.sentMessage(text, function(recv) {
        console.log(recv);
      }, function(err) {
        console.log(err);
      });
      
    }
    
  });
  
  var addComponent = document.getElementById("add_component");
  addComponent.addEventListener('click', function() {
    var tr = document.getElementById("segmentEdit_components");
    var inputComponent = document.createElement('input');
    tr.appendChild(inputComponent);
  });
};

View.reset = function() {
  DOMHelpers.removeClass("msg_segment_menu", "save_required");
  DOMHelpers.addClass("msg_segment_menu", "menu");
};

View.loadFileEntry=function(_chosenEntry) {
  chosenEntry = _chosenEntry;
  chosenEntry.file(function(file) {
    File.readAsText(chosenEntry, function(result) {
      HL7.parseMsg(result, function(parsedMessage) {
        View.reset();
        View.displayMessage(parsedMessage);
        
      });
    });
    // Update display.
    //saveFileButton.disabled = false; // allow the user to save the content
    View.displayEntryData(chosenEntry);
  });
};

//display each line of file
View.displayMessage = function(parsedMessage) {
  View.parsedMessage = parsedMessage;
  var html_ul = HL7_Formatter.formatMessage(View.parsedMessage);
  DOMHelpers.addElementAsComponent("msg_content",html_ul);
  DOMHelpers.show("msg_content");
  DOMHelpers.hide("msg_segment_wnd");
  DOMHelpers.removeChildren("msg_segment");
  DOMHelpers.removeChildren("msg_segment_menu");
  DOMHelpers.removeChildren("msg_segment");
  
  //for each segment
  for(var segmentIndex in View.parsedMessage.segments) {
    var segment = View.parsedMessage.segments[segmentIndex];
    var segmentId = "segment_" + segmentIndex;
    document.getElementById(segmentId).addEventListener("click", View.segmentClickFactory(segmentIndex));
    //menuItem for segments
    var segmentMenu = document.getElementById("msg_segment_menu");
    var liElement = document.createElement('li');
    liElement.id="menu_" + segmentIndex;
    liElement.className="menuItem_class";
    liElement.appendChild(document.createTextNode(segment.segmentName));
    liElement.addEventListener("click", View.menuClickFactory(segmentIndex));
    //liElement.addEventListener("mouseenter", View.menuMouseEnterFacotry(segment));
    //liElement.addEventListener("mouseleave", View.menuMouseLeaveFacotry());
    segmentMenu.appendChild(liElement);
    
    //segemntDetail
    var msg_segment = document.getElementById("msg_segment");
    var liElementSegment = document.createElement('li');
    liElementSegment.id="component_" + segmentIndex;
    liElementSegment.className='component_class';
    var detail = View.formatSegmentInDetail(segmentIndex);
    liElementSegment.appendChild(detail);
    msg_segment.appendChild(liElementSegment);
  }
};

View.formatSegmentInDetail = function(segmentIndex) {
  var segment = View.parsedMessage.segments[segmentIndex];
  var handleMouseOver=function() {
    console.log("handling mouse over");
  };
  var segmentName = segment.segmentName;
  var tbl = document.createElement('table');
  var tbdy = document.createElement('tbody');
  for (var index in segment.fields) {
    var field = segment.fields[index];
    var indexNumber = parseInt(index) + 1;
    var tableRow = document.createElement('tr');
    tableRow.addEventListener('click', View.componentSelectorFactory());
    tableRow.id=(segmentIndex + "-" + segmentName + '-' + (parseInt(index)+1));
    View.formatFieldInDetail(tableRow, segmentName, indexNumber, field);
    tbdy.appendChild(tableRow);
  }
  tbl.appendChild(tbdy);
  return tbl;
};


View.formatFieldInDetail = function(tableRow, name, index , components) {
  var className = 'componentCell';
  var numberOfComponents = components.length;
  var segmentName = name + "-" + index;
  var tdMain = DOMHelpers.addCell((name + "-" + index), className);
  tdMain.addEventListener('mouseenter', View.menuMouseEnterFacotry());
  tdMain.addEventListener('mouseleave', View.menuMouseLeaveFacotry());
  tableRow.appendChild(tdMain);
  for (var compIndex =0; compIndex<numberOfComponents; compIndex++) {
    if (compIndex!==0) {
      tableRow.appendChild(DOMHelpers.addCell('^',''));
    }
    tableRow.appendChild(DOMHelpers.addCell(components[compIndex], className));
  }
};

View.componentSelectorFactory=function() {
  
  return function(e) {
    var id = e.currentTarget.id;
    View.selectedField = id;
    var info = id.split("-");
    var segmentIndex = parseInt(info[0]);
    var fieldIndex = parseInt(info[2])-1;
    var segment = View.parsedMessage.segments[segmentIndex];
    var field=segment.fields[fieldIndex];
    var fieldName = document.getElementById("segmentEdit_fieldName");
    fieldName.innerHTML=(segment.segmentName + "-" + info[2]);
    DOMHelpers.removeChildren("segmentEdit_components");
    var components = document.getElementById("segmentEdit_components");
    for (var componentIndex in field) {
      var inputComponent = document.createElement('input');
      inputComponent.value=field[componentIndex];
      components.appendChild(inputComponent);
    }
    
    DOMHelpers.show("segmentEdit");
    DOMHelpers.hide("msg_segment_wnd");
    
    
  };
};

View.menuMouseEnterFacotry=function(segment) {
  return function(e) {
    var cell = e.currentTarget;
    var segmentInfo = cell.innerText;
    var segmentInfoArr = segmentInfo.split("-");
    var segmentName = segmentInfoArr[0];
    var componentIndex = segmentInfoArr[1];
    var componentDB = DB[segmentName];
    var component = componentDB[segmentInfo];
    
    var x = e.clientX;
    var y = e.clientY;
    var d = document.getElementById("componentHover");
    d.style.position = "absolute";
    d.style.left = x + 'px';
    d.style.top = y +'px';
    var lastIndex = component.length-1;
    var opt = (component[3]=='R')?"Required":(component[3]=='C')?"Conditional":"Optional";
    
    document.getElementById("componentId").innerHTML=component[0];
    document.getElementById("componentName").innerHTML=component[lastIndex];
    document.getElementById("componentDataType").innerHTML=component[2];
    document.getElementById("componentOpt").innerHTML=opt;
    
    DOMHelpers.show("componentHover");
  };
};

View.menuMouseLeaveFacotry=function() {
  return function(e) {
    DOMHelpers.hide("componentHover");
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
    
    var msg_segmentDiv = document.getElementById("msg_segment");
    
    var components = msg_segmentDiv.childNodes;
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
    var elementBR = msg_segmentDiv.getBoundingClientRect();
    var windowHeight = screen.availHeight;
    var windowWidth = screen.availWidth;
    if (elementBR.bottom-elementBR.top>windowHeight) {
      var windowH = windowHeight - elementBR.top - 50;
      msg_segmentDiv.style.height = windowH + "px";
    } else {
      msg_segmentDiv.style.height = '';
    }
    
    if (elementBR.right-elementBR.left>windowWidth) {
      var windowW = windowWidth - elementBR.left;
      msg_segmentDiv.style.width = windowW + "px";
    } else {
      msg_segmentDiv.style.width = '';
    }
    
    console.log(elementBR);
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


