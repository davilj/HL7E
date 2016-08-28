var View = {};

View.displayMessage = function(parsedMessage) {
  var html_ul = HL7_Formatter.formatMessage(parsedMessage);
  DOMHelpers.addElementAsComponent("msg_content",html_ul);
  DOMHelpers.removeChildren("msg_segment");
  for(var segmentIndex in parsedMessage.segments) {
    var segmentName = "segment_" + segmentIndex;
    document.getElementById(segmentName).addEventListener("click", View.segmentClickFactory(segmentIndex, parsedMessage));
  }
};

View.segmentClickFactory=function(segmentIndex, parsedMessage) {
  return function(){
            var segmentNameHoverHandler = function(coord, name) {
              if (name==='') return;
              var segmentInfo = DB.getSegmentInfo(name);
              HL7_Formatter.setSegmentInfo(coord, name, segmentInfo[0], segmentInfo[1]);
            };
            var segmentNameOutHandler = function(name) {
              console.log('Handling out for: ' + name);
              if (name==='') return;
              HL7_Formatter.hideSegmentInfo();
            };
            //remove all selected CSS
            var li_segments = document.getElementsByClassName('segment');
            var numberOfSegments = li_segments.length;
            for (var li_index=0; li_index<numberOfSegments; li_index++) {
              li_segment = li_segments[li_index];
              var cssClasses = li_segment.className.replace('selected','').trim();
              if (li_index==segmentIndex) {
                cssClasses = cssClasses + " selected";
              }
              li_segment.className=cssClasses;
            }
            var segment = parsedMessage.segments[segmentIndex];
            var segmentHTMLTable = HL7_Formatter.formatSegmentInDetail(segment, segmentNameHoverHandler, segmentNameOutHandler);
            DOMHelpers.addElementAsComponent("msg_segment",segmentHTMLTable);
            DOMHelpers.show("msg_segment_wnd");
  };
};

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


