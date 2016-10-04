var MsgView={};

MsgView.Init=function() {
  //<div id="msg_content"></div>
  EventBus.subscribe(MsgView.Messages, function(msg) {
    if (msg.name==MsgView.Messages.LoadMsg.name) {
      var parsedMessage=msg['parsedMessage'];
      MsgView.displayMessage(parsedMessage);
    }
    if (msg.name==MsgView.Messages.Show.name) {
      DOMHelpers.show("msg_content");
    }
    if (msg.name==MsgView.Messages.Show.hide) {
      DOMHelpers.hide("msg_content");
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

MsgView.Messages={};
MsgView.Messages.LoadMsg={name:"MsgView.LoadMsg"};
MsgView.Messages.Show={name:"MsgView.Show"};