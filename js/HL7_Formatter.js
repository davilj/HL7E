/*
*/
var HL7_Formatter = {};
HL7_Formatter.message={};

HL7_Formatter.setMessage = function(hl7Msg) {
  HL7_Formatter.message = hl7Msg;
};

HL7_Formatter.formatMessage = function(segmentClickListener) {
  var segmentArr = HL7_Formatter.message.segments.map(HL7_Formatter.formatSegment);
  var segmentTxt = "<ul class='message'>";
  for (var index in segmentArr) {
    var segment = segmentArr[index];
    var name = HL7_Formatter.getSegmentName(segment);
    zsegment="";
    if (name.toLowerCase().startsWith("z") ){
      zsegment=" z_segment_style";
      name=name.substring(1);
    }
    segmentTxt += "<li class='segment " + name + zsegment + "' id='segment_"+index+"'>" + segmentArr[index] + "</li>";
  }
  segmentTxt = segmentTxt + "</ul>";
  return segmentTxt;
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

HL7_Formatter.formatSegmentInDetail = function(segment) {
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
    HL7_Formatter.formatFieldInDetail(tableRow, segmentName, indexNumber, field);
    tbdy.appendChild(tableRow);
    
  }
  tbl.appendChild(tbdy);
  return tbl;
};


HL7_Formatter.handleMouseOver = function() {
  console.log("Handle mouse over externally");
};


HL7_Formatter.formatFieldInDetail = function(tableRow, name, index , components) {
  var className = 'componentCell ' + name;
  var numberOfComponents = components.length;
  var addCell = function(content, _class) {
    var tableCell = document.createElement('td');
    tableCell.appendChild(document.createTextNode(content));
    tableCell.className = _class;
    return tableCell;
  };
  
  tableRow.appendChild(addCell((name + "-" + index), className));
  for (var compIndex =0; compIndex<numberOfComponents; compIndex++) {
    if (compIndex!==0) {
      tableRow.appendChild(addCell('^',''));
    }
    tableRow.appendChild(addCell(components[compIndex], className));
  }
};





