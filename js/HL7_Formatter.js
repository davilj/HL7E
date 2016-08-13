/*
*/
var HL7_Formatter = {};

HL7_Formatter.formatMessage = function(message) {
  var segmentArr = message.segments.map(HL7_Formatter.formatSegment);
  var ul = document.createElement('ul');
  ul.className='message';
  for (var index in segmentArr) {
    var segment = segmentArr[index];
    var name = HL7_Formatter.getSegmentName(segment);
    zsegment="";
    if (name.toLowerCase().startsWith("z") ){
      zsegment=" z_segment_style";
      name=name.substring(1);
    }
    var className = 'segment ' + name + zsegment;
    //segmentTxt += "<li class='segment " + name + zsegment + "' id='segment_"+index+"'>" + segmentArr[index] + "</li>";
    var li = document.createElement('li');
    li.className=className;
    li.id=('segment_' + index);
    li.appendChild(document.createTextNode(segmentArr[index]));
    ul.appendChild(li);
  }
  return ul;
};

HL7_Formatter.formatSegment = function(segment) {
  var fieldsArr = segment.fields.map(HL7_Formatter.formatField);
  return segment.segmentName + "|" + fieldsArr.join("|");
};

HL7_Formatter.formatField = function(components) {
  var joinedComponents = components.join('^');
  return "|" + joinedComponents;
};

HL7_Formatter.getSegmentName = function(segment) {
  var index = segment.indexOf("|");
  var segmentName = segment.substring(0,index);
  return segmentName.toLowerCase();
};

HL7_Formatter.formatSegmentInDetail = function(segment, segmentNameHoverHandler, segmentNameOutHandler) {
  var handleMouseOver=function() {
    console.log("handling mouse over");
  };
  var segmentName = segment.segmentName;
  var tbl = document.createElement('table');
  //tbl.style.width = '100%';
  var tbdy = document.createElement('tbody');
  for (var index in segment.fields) {
    var field = segment.fields[index];
    var indexNumber = parseInt(index) + 1;
    var tableRow = document.createElement('tr');
    tableRow.id=('segment_' + index);
    HL7_Formatter.formatFieldInDetail(segmentNameHoverHandler, segmentNameOutHandler, tableRow, segmentName, indexNumber, field);
    tbdy.appendChild(tableRow);
    
  }
  tbl.appendChild(tbdy);
  return tbl;
};


HL7_Formatter.formatFieldInDetail = function(segmentNameHoverHandler, segmentNameOutHandler, tableRow, name, index , components) {
  var className = 'componentCell ' + name;
  var numberOfComponents = components.length;
  var addCell = function(content, _class) {
    var tableCell = document.createElement('td');
    tableCell.appendChild(document.createTextNode(content));
    tableCell.className = _class;
    return tableCell;
  };
  
  var segmentName = name + "-" + index;
  var hoverHandlerFactory=function(name, segmentNameHoverHandler) {
    return function() {
      segmentNameHoverHandler(segmentName);
    };
  };
  
  var hoverOutHandlerFactory=function(name, segmentNameOutHandler) {
    return function() {
      segmentNameOutHandler(segmentName);
    };
  };
  
  var tdMain = addCell((name + "-" + index), className);
  tdMain.addEventListener("mouseenter", hoverHandlerFactory(name, segmentNameHoverHandler), false);
  tdMain.addEventListener("mouseleave", hoverOutHandlerFactory(name, segmentNameOutHandler), false);
  tableRow.appendChild(tdMain);
  for (var compIndex =0; compIndex<numberOfComponents; compIndex++) {
    if (compIndex!==0) {
      tableRow.appendChild(addCell('^',''));
    }
    tableRow.appendChild(addCell(components[compIndex], className));
  }
};

HL7_Formatter.setSegmentInfo=function(segmentId, segmentName, segmentDesc) {
  document.querySelector('#segmentId').innerHTML="<h2>" + segmentId + "</h2>";
  document.querySelector('#segmentName').innerHTML="<h4>" + segmentName + "</h4>";
  document.querySelector('#segmentDesc').innerHTML=segmentDesc;
  document.querySelector('#segmentInfo').className='info';
};

HL7_Formatter.hideSegmentInfo=function() {
  document.querySelector('#segmentInfo').className='info hide';
};





