

var View = {};

View.init = function() {
  MsgSender.Init();
  MenuBar.Init();
  MsgSegment.Init();
  MsgView.Init();
  
  //router, display message
  EventBus.subscribe(Messages.MsgDisplay,function(msg) {
    var type = msg['type'];
    var entry=msg['file'];
    
    if (type==Messages.MsgDisplay_open) {
      entry.file(function(chosenEntry) {
        File.readAsText(entry, function(readMsg){
          HL7.parseMsg(readMsg, function(parsedMessage){
              var msg = {'type': Messages.MsgDisplay_display, 'parsedMessage': parsedMessage};
              EventBus.publish(Messages.MsgDisplay , msg);
            });
        });
      });
    }
    
    if (type=='save') {
      var blob=msg['data'];
      var writableEntry=msg['file'];
      File.writeFileEntry(writableEntry, blob, function(e) {
        //DOMHelpers.hide("save_message");
        DOMHelpers.removeClass("msg_segment_menu", "save_required");
        DOMHelpers.addClass("msg_segment_menu", "menu");
      });
    }
  });
  
  //router Sending messages
  EventBus.subscribe(Messages.SendingMsg, function(msg) {
    var type = msg['type'];
    if (type==Messages.SendMsg) {
      var ip = msg['ip'];
      var port = msg['port'];
      Network.setConnection(ip, port);
      var text = HL7.toText(View.parsedMessage);
      Network.sentMessage(text, function(recv) {
        console.log(recv);
      }, function(err) {
        console.log(err);
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


