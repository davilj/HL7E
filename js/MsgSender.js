var MsgSender = {};

MsgSender.Init=function() {
  //default state hidden
  var input_IP = document.getElementById("ip");
  var input_Port = document.getElementById("port");
  var msgReport = document.getElementById("msgReport");
  var cancelBtn = document.getElementById("cancelMsgSend");
  var sendBtn = document.getElementById("sendMsgSend");
  
  var reset=function() {
    input_IP.value='';
    input_Port.value='';
    msgReport.innerHTML='';
    document.getElementById("msgReport").style.display='none';
  };
  
  var add2Report=function(msg) {
    document.getElementById("msgReport").style.display='block';
    var currentMsg = msgReport.innerHTML;
    currentMsg = currentMsg + "<br>";
    var time = new Date();
    currentMsg = currentMsg + formatAsDatePart(time.getDate()) + "-"; 
    currentMsg = currentMsg + formatAsDatePart(time.getMonth() + 1) + "-"; 
    currentMsg = currentMsg + formatAsDatePart(time.getFullYear());
    currentMsg = currentMsg + " ";
    currentMsg = currentMsg + formatAsDatePart(time.getHours()) + ":"; 
    currentMsg = currentMsg + formatAsDatePart(time.getMinutes()) + ":";
    currentMsg = currentMsg + formatAsDatePart(time.getSeconds()) + ",";
    currentMsg = currentMsg + formatAsDatePart(time.getMilliseconds());
    
    currentMsg = currentMsg + " - ";
    currentMsg = currentMsg + msg;
    msgReport.innerHTML = currentMsg;
  };
  
  var formatAsDatePart=function(number) {
    if (number<10) {
      return "0" + (number.toString());
    } else {
      return (number.toString());
    }
  };
  
  cancelBtn.addEventListener('click', function() {
    reset();
    document.getElementById("sendMessage_wnd").style.display='none';
    EventBus.publish(Messages.SendingMsg,MsgSender.Messages.Cancel);
  });
  
  sendBtn.addEventListener('click', function() {
    var ip = input_IP.value;
    var port = input_Port.value;
    add2Report("--------------------------------------");
    add2Report(("Send msg to " + ip + ":" + port));
    var msg = MsgSender.Messages.Send;
    msg['ip']=ip;
    msg['port']=port;
    EventBus.publish(Messages.SendingMsg, msg);
  });
  
  //eventbus listener
  EventBus.subscribe(MsgSender.Messages,function(msg) {
    if (msg.name==MsgSender.Messages.Show.name) {
      DOMHelpers.show("sendMessage_wnd");
    }
    if (msg.name==MsgSender.Messages.Hide.name || msg.name==MsgSender.Messages.Cancel.name) {
      DOMHelpers.hide("msgReport");
      DOMHelpers.hide("sendMessage_wnd");
    }
    if (msg.name==MsgSender.Messages.ErrorMsg.name) {
      add2Report("ERROR:");
      add2Report(msg.error);
    }
    
    if (msg.name==MsgSender.Messages.SuccessMsg.name) {
      add2Report(msg.feedback);
    }
  });
};

MsgSender.Messages={
    'Show':{'name':'MsgSender.Show'},
    'Hide':{'name':'MsgSender.Hide'},
    'Cancel':{'name':"MsgSender.Cancel"},
    'Send':{'name':'MsgSender.Send'},
    'ErrorMsg':{'name':'MsgSender.Error'},
    'SuccessMsg':{'name':'MsgSender.Success'}
};
