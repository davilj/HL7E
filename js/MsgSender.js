var MsgSender = {};

MsgSender.Init=function() {
  //default state hidden
  var input_IP = document.getElementById("ip");
  var input_Port = document.getElementById("port");
  var msgReport = document.getElementById("msgReport");
  var cancelBtn = document.getElementById("cancelMsgSend");
  var sendBtn = document.getElementById("sendMsgSend");
  
  cancelBtn.addEventListener('click', function() {
    DOMHelpers.hide("sendMessage_wnd");
    EventBus.publish(Messages.SendingMsg,Messages.CanselSending);
  });
  
  sendBtn.addEventListener('click', function() {
    var ip = input_IP.value;
    var port = input_Port.value;
    
    msgReport.value=("Send msg to " + ip + ":" + port);
    var msg = {};
    msg['type']=Messages.SendMsg;
    msg['ip']=ip;
    msg['port']=port;
    EventBus.publish(Messages.SendingMsg, msg);
  });
  
  //eventbus listener
  EventBus.subscribe(Messages.SendingMsg,MsgSender.messageHandler);
  
};

MsgSender.messageHandler=function(msg) {
  if (msg==Messages.StartSending) {
    DOMHelpers.show("sendMessage_wnd");
  }
};