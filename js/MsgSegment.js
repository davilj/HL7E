var MsgSegment = {};

MsgSegment.Init=function() {
  var saveSegment = document.getElementById("save_segment");
  var cancel = document.getElementById("cancel_segment");
  
  saveSegment.addEventListener('click', function() {
    var selected = MsgSegment.selectedField;
    var info = selected.split("-");
    var segmentIndex = info[0];
    var segmentName = info[1];
    var fieldIndex = info[2];
    var fieldElement = document.getElementById("segmentEdit_components");
    var components = fieldElement.childNodes;
    var numberOfComponents = components.length;
    var componentIndex=0;
    var newComponents = [];
    for (componentIndex; componentIndex<numberOfComponents; componentIndex++) {
      var inputComponent = components[componentIndex];
      var value = inputComponent.value;
      newComponents.push(value);
    }
    var trId = selected;
    var tr = document.getElementById(trId);
    DOMHelpers.removeChildren(trId);
    MsgSegment.formatFieldInDetail(tr, segmentName, fieldIndex , newComponents);
    MsgSegment.parsedMessage.segments[segmentIndex].fields[parseInt(fieldIndex)-1]=newComponents;
    
    DOMHelpers.hide("segmentEdit");
    DOMHelpers.show("msg_segment_wnd");
    DOMHelpers.removeClass("msg_segment_menu", "menu");
    DOMHelpers.addClass("msg_segment_menu", "save_required");
    EventBus.publish(Messages.MenuBar, Messages.MsgSavedRequired);
  });
  
  cancel.addEventListener('click', function() {
      DOMHelpers.hide("segmentEdit");
      DOMHelpers.show("msg_segment_wnd");
  });
  
  //eventbus listener
  EventBus.subscribe(Messages.SendingMsg, function(msg){
    if (msg.name==MsgSegment.Messages.Show.name) {
      DOMHelpers.show("msg_segment_wnd");
    }
    if (msg.name==MsgSegment.Messages.Hide.name) {
      DOMHelpers.hide("msg_segment_wnd");
    }
    
  });
  
  EventBus.subscribe(Messages.MsgDisplay, function(msg) {
    var type = msg['type'];
    if (type==Messages.MsgDisplay_display) {
      var parsedMessage = msg['parsedMessage'];
      DOMHelpers.removeChildren("msg_segment_menu");
      DOMHelpers.removeChildren("msg_segment");
      MsgSegment.loadSegments(parsedMessage);
      DOMHelpers.hide("msg_segment_wnd");
    }
  });
};

MsgSegment.loadSegments=function(parsedMessage) {
  MsgSegment.parsedMessage = parsedMessage;
  //for each segment
  for(var segmentIndex in parsedMessage.segments) {
    var segment = parsedMessage.segments[segmentIndex];
    
    //add a click handler for selecting a segment (line) in MsgView
    var segmentId = "segment_" + segmentIndex;
    document.getElementById(segmentId).addEventListener("click", MsgSegment.segmentClickFactory(segmentIndex));
    //menuItem for segments
    var segmentMenu = document.getElementById("msg_segment_menu");
    var liElement = document.createElement('li');
    liElement.id="menu_" + segmentIndex;
    liElement.className="menuItem_class";
    liElement.appendChild(document.createTextNode(segment.segmentName));
    liElement.addEventListener("click", MsgSegment.menuClickFactory(segmentIndex));
    //liElement.addEventListener("mouseenter", View.menuMouseEnterFacotry(segment));
    //liElement.addEventListener("mouseleave", View.menuMouseLeaveFacotry());
    segmentMenu.appendChild(liElement);
    segmentMenu.className="menu";
    
    //segemntDetail
    var msg_segment = document.getElementById("msg_segment");
    var liElementSegment = document.createElement('li');
    liElementSegment.id="component_" + segmentIndex;
    liElementSegment.className='component_class';
    var detail = MsgSegment.formatSegmentInDetail(segmentIndex);
    liElementSegment.appendChild(detail);
    msg_segment.appendChild(liElementSegment);
  }
};

MsgSegment.segmentClickFactory=function(segmentIndex) {
  return function(){
    //TODO msg for this
    DOMHelpers.hide("msg_content");
    
    var menuSelectionFunction = MsgSegment.menuClickFactory(segmentIndex);
    menuSelectionFunction();
    DOMHelpers.show("msg_segment_wnd");
  };
};

MsgSegment.menuClickFactory=function(visibleIndex) {
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

MsgSegment.formatSegmentInDetail = function(segmentIndex) {
  var segment = MsgSegment.parsedMessage.segments[segmentIndex];
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
    tableRow.addEventListener('click', MsgSegment.componentSelectorFactory());
    tableRow.id=(segmentIndex + "-" + segmentName + '-' + (parseInt(index)+1));
    MsgSegment.formatFieldInDetail(tableRow, segmentName, indexNumber, field);
    tbdy.appendChild(tableRow);
  }
  tbl.appendChild(tbdy);
  return tbl;
};

MsgSegment.componentSelectorFactory=function() {
  return function(e) {
    var id = e.currentTarget.id;
    MsgSegment.selectedField = id;
    var info = id.split("-");
    var segmentIndex = parseInt(info[0]);
    var fieldIndex = parseInt(info[2])-1;
    var segment = MsgSegment.parsedMessage.segments[segmentIndex];
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

MsgSegment.formatFieldInDetail = function(tableRow, name, index , components) {
  var className = 'componentCell';
  var numberOfComponents = components.length;
  var segmentName = name + "-" + index;
  var tdMain = DOMHelpers.addCell((name + "-" + index), className);
  tdMain.addEventListener('mouseenter', MsgSegment.menuMouseEnterFacotry());
  tdMain.addEventListener('mouseleave', MsgSegment.menuMouseLeaveFacotry());
  tableRow.appendChild(tdMain);
  for (var compIndex =0; compIndex<numberOfComponents; compIndex++) {
    if (compIndex!==0) {
      tableRow.appendChild(DOMHelpers.addCell('^',''));
    }
    tableRow.appendChild(DOMHelpers.addCell(components[compIndex], className));
  }
};

MsgSegment.menuMouseEnterFacotry=function(segment) {
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

MsgSegment.menuMouseLeaveFacotry=function() {
  return function(e) {
    DOMHelpers.hide("componentHover");
  };
};

MsgSegment.Messages={
    'Show':{'name':'MsgSegment.Show'},
    'Hide':{'name':'MsgSegment.Hide'}
};


