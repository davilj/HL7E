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
  var html_ul = HL7_Formatter.formatMessage(parsedMessage);
  DOMHelpers.addElementAsComponent("msg_content",html_ul);
  
  
  DOMHelpers.show("msg_content");
};
