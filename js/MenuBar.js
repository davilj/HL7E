var MenuBar = {};

MenuBar.Init=function() {
  var chooseFileButton = document.getElementById('choose_file');
  var saveMessage = document.getElementById("save_message");
  var sendMessage = document.getElementById("send_message");
  var fileLoc = document.getElementById("file_path");
  
  chooseFileButton.addEventListener('click', function(e) {
    var accepts = [{
      mimeTypes: ['text/*'],
      extensions: ['edi']
    }];
    chrome.fileSystem.chooseEntry({type: 'openFile', accepts: accepts}, function(theEntry) {
      if (!theEntry) {
        fileLoc.value = 'No file selected.';
        return;
      } else {
        if (theEntry.isFile) {
          chrome.fileSystem.getDisplayPath(theEntry, function(path) {
            document.querySelector('#file_path').value = path;
          });
        //theEntry.getMetadata(function(data) {
        //document.querySelector('#file_size').textContent = data.size;
    
        //fileLoc.value = theEntry.fullPath;
        }
      }
      // use local storage to retain access to this file
      chrome.storage.local.set({'chosenFile': chrome.fileSystem.retainEntry(theEntry)});
      //View.loadFileEntry(theEntry);
      var msg = {'type': Messages.MsgDisplay_open, 'file': theEntry};
      EventBus.publish(Messages.MsgDisplay , msg);
      document.getElementById("send_message").disabled=false;
    });
  });
  
  saveMessage.addEventListener('click', function() {
    var config = {type: 'saveFile', suggestedName: document.querySelector('#file_path').value};
    chrome.fileSystem.chooseEntry(config, function(writableEntry) {
      var msg = {'type': Messages.MsgSave_save, 'file': writableEntry };
      //'data': blob };
      EventBus.publish(Messages.MsgSave, msg);
      
    });
  });
  
  sendMessage.addEventListener('click', function() {
    EventBus.publish(Messages.SendingMsg,MenuBar.Messages.PressSendMsg);
  });
  
  EventBus.subscribe(MenuBar.Messages, function(msg){
    if (msg==Messages.MsgSaved || msg==Messages.MsgOpened) {
      var saveMessageBtn = document.getElementById("save_message");
      var openMessageBtn = document.getElementById("choose_file");
      var sendMessageBtn = document.getElementById("send_message");
    
      saveMessageBtn.disabled=false;
      openMessageBtn.disabled=false;
      sendMessageBtn.disabled=false;
    }
  
    if (msg==Messages.MsgSavedRequired) {
      document.getElementById("save_message").disabled=false;
    }
    
    if (msg.name==MenuBar.Messages.Hide.name) {
      DOMHelpers.hide("menu_wnd");
    }
  });
};

MenuBar.Messages={};
MenuBar.Messages.PressSendMsg={name:"MenuBar.PressMsg"};
MenuBar.Messages.Hide={name:"MenuBar.Hide"};
