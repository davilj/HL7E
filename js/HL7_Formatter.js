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



HL7_Formatter.setSegmentInfo=function(coord, segmentId, segmentName, segmentDesc) {
  console.log(coord);
  var d = document.querySelector('#segmentInfo');
  d.style.position = "absolute";
  d.style.left = '50px';
  d.style.top = coord[1]+'px';
  document.querySelector('#segmentId').innerHTML="<h2>" + segmentId + "</h2>";
  document.querySelector('#segmentName').innerHTML="<h4>" + segmentName + "</h4>";
  document.querySelector('#segmentDesc').innerHTML=segmentDesc;
  document.querySelector('#segmentInfo').className='info';
};





