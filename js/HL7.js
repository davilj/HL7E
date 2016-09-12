/*
*/
var HL7 = {};



HL7.parseMsg = function(msgText, callback) {
  console.log(msgText);
  var segments = msgText.split('\r').map(HL7.parseSegment);
  var message = {'segments':segments};
  callback(message);
};

HL7.parseSegment = function(segment) {
  var fields = segment.split('|');
  var parsedSegment={};
  parsedSegment.segmentName=fields[0];
  parsedSegment.fields=fields.slice(1);
  parsedSegment.fields = parsedSegment.fields.map(HL7.parseComponent);
  return parsedSegment;
};

HL7.parseComponent = function(field) {
  var components = field.split('^');
  return components;
};

HL7.toText = function(parsedMessage) {
  var segments = parsedMessage.segments.map(function(segment) {
    var fields = segment.fields.map(function(components) {
      return components.join('^');
    });
    
    fields.unshift(segment.segmentName);
    return fields.join("|");
  });
  return segments.join('\r');
};


