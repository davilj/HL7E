var MsgSender = {};

MsgSender.Init=function() {
  //default state hidden
  var input_IP = document.getElementById("ip");
  var input_Port = document.getElementById("port");
  var msgReport = document.getElementById("msgReport");
  var cancelBtn = document.getElementById("cancelMsgSend");
  var sendBtn = document.getElementById("sendMsgSend");
  
  cancelBtn.addEventListener('click', function() {
    MsgSender.hide();
    EventBus.publish('msgSender','cancel');
  });
  
  sendBtn.addEventListener('click', function() {
    var ip = input_IP.value;
    var port = input_Port.value;
    Network.setConnection(ip, port);
    msgReport.value=("Send msg to " + ip + ":" + port);
  });
  
  //eventbus listener
  EventBus.subscribe(Messages.SendingMsg,MsgSender.messageHandler);
};

MsgSender.messageHandler=function(msg) {
  if (msg==Messages.Start) {
    DOMHelpers.show("sendMessage_wnd");
  }
};