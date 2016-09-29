var MenuBar = {};

MenuBar.Init=function() {
  var chooseFileButton = document.getElementById('choose_file');
  var saveMessage = document.getElementById("save_message");
  var sendMessage = document.getElementById("send_message");
  
  chooseFileButton.addEventListener('click', function(e) {
    var accepts = [{
      mimeTypes: ['text/*'],
      extensions: ['edi']
    }];
    chrome.fileSystem.chooseEntry({type: 'openFile', accepts: accepts}, function(theEntry) {
      if (!theEntry) {
        output.textContent = 'No file selected.';
        return;
      }
      // use local storage to retain access to this file
      chrome.storage.local.set({'chosenFile': chrome.fileSystem.retainEntry(theEntry)});
      //View.loadFileEntry(theEntry);
      var msg = {'type': Messages.MsgDisplay_open, 'file': theEntry};
      EventBus.publish(Messages.MsgDisplay , msg);
    });
  });
  
  saveMessage.addEventListener('click', function() {
    var config = {type: 'saveFile', suggestedName: chosenEntry.name};
    chrome.fileSystem.chooseEntry(config, function(writableEntry) {
      var text = HL7.toText(View.parsedMessage);
      var blob = new Blob([text], {type: 'text/plain'});
      //mmm blob should move in werteFileEntry
      var msg = {'type': 'save', 'file': writableEntry, 'data': blob };
      EventBus.publish(Messages.MsgDisplay,msg);
    });
  });
  
  
  sendMessage.addEventListener('click', function() {
    //MsgSender.show("sendMessage_wnd");
    DOMHelpers.hide("main_nav");
    EventBus.publish(Messages.SendingMsg,Messages.StartSending);
  });
  
  EventBus.subscribe(Messages.MenuBar, MenuBar.messageHandler);
  
};


MenuBar.messageHandler=function(msg) {
  if (msg==Messages.MsgSaved || msg==Messages.MsgOpened) {
    var saveMessageBtn = document.getElementById("save_message");
    var openMessageBtn = document.getElementById("choose_file");
    var sendMessageBtn = document.getElementById("send_message");
    
    saveMessageBtn.disabled=false;
    openMessageBtn.disabled=false;
    sendMessageBtn.disabled=false;
  }
};