

var Controller = {};

Controller.init = function() {
  
  //router, display message
  EventBus.subscribe(Messages.MsgDisplay,function(msg) {
    if (msg.name==MenuBar.Messages.LoadMsg.name) {
      var entry=msg['file'];
      entry.file(function(chosenEntry) {
        File.readAsText(entry, function(readMsg){
          HL7.parseMsg(readMsg, function(parsedMessage){
              Controller.parsedMessage=parsedMessage;
              var msg = MsgView.Messages.LoadMsg;
              msg.parsedMessage=parsedMessage;
              EventBus.publish(MsgView.Messages , msg);
              
              var eMsg = MsgSegment.Messages.LoadMsg;
              eMsg.parsedMessage=parsedMessage;
              EventBus.publish(MsgSegment.Messages , eMsg);
            });
        });
      });
    }
  });
  
  EventBus.subscribe(Messages.MsgSave, function(msg) {
    if (msg.name==MsgSegment.Messages.MsgEdited.name) {
      Controller.parsedMessage=msg.updatedMsg;
      EventBus.publish(MenuBar.Messages, MenuBar.Messages.SaveRequired);
      
    }
    if (msg.name==MenuBar.Messages.SaveMsg.name) {
      var text = HL7.toText(Controller.parsedMessage);
      var blob = new Blob([text], {type: 'text/plain'});
      
      var writableEntry=msg['file'];
      File.writeFileEntry(writableEntry, blob, function(e) {
        DOMHelpers.removeClass("msg_segment_menu", "save_required");
        DOMHelpers.addClass("msg_segment_menu", "menu");
      });
    }
  });
    
  //router Sending messages
  EventBus.subscribe(Messages.SendingMsg, function(msg) {
    if (msg.name==MenuBar.Messages.SendMsg.name) {
      EventBus.publish(MenuBar.Messages, MenuBar.Messages.Hide);
      EventBus.publish(MsgSender.Messages, MsgSender.Messages.Show);
      EventBus.publish(MsgView.Messages , MsgView.Messages.Show);
      EventBus.publish(MsgSegment.Messages , MsgSegment.Messages.Hide);
    }
    
    if (msg.name==MsgSender.Messages.Cancel.name) {
      EventBus.publish(MenuBar.Messages, MenuBar.Messages.Show);
    }
    
    if (msg.name==MsgSender.Messages.Send.name) {
      var ip = msg['ip'];
      var port = msg['port'];
      Network.setConnection(ip, port);
      var text = HL7.toText(Controller.parsedMessage);
      Network.sentMessage(text, function(recv) {
        var msg = MsgSender.Messages.SuccessMsg;
        msg['feedback']=recv;
        EventBus.publish(MsgSender.Messages, msg);
      }, function(err) {
        var msg = MsgSender.Messages.ErrorMsg;
        msg['error']=err;
        EventBus.publish(MsgSender.Messages, msg);
      });
    }
  });
  
  var addComponent = document.getElementById("add_component");
  addComponent.addEventListener('click', function() {
    var tr = document.getElementById("segmentEdit_components");
    var inputComponent = document.createElement('input');
    tr.appendChild(inputComponent);
  });
};


//display selected file
Controller.displayEntryData=function(theEntry) {
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


