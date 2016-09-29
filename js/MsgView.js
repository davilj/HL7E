var MsgView={};

MsgView.Init=function() {
  //<div id="msg_content"></div>
  EventBus.subscribe(Messages.MsgDisplay, function(msg) {
    var type=msg['type'];
    if (type==Messages.MsgDisplay_display) {
      var parsedMessage=msg['parsedMessage'];
      MsgView.displayMessage(parsedMessage);
    }
  });
};
  //display each line of file
MsgView.displayMessage = function(parsedMessage) {
  MsgView.parsedMessage = parsedMessage;
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


