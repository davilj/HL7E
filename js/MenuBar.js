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
      var msg = MenuBar.Messages.LoadMsg;
      msg['file']=theEntry;
      EventBus.publish(Messages.MsgDisplay , msg);
      document.getElementById("send_message").disabled=false;
    });
  });
  
  saveMessage.addEventListener('click', function() {
    var config = {type: 'saveFile', suggestedName: document.querySelector('#file_path').value};
    chrome.fileSystem.chooseEntry(config, function(writableEntry) {
      var msg = MenuBar.Messages.SaveMsg;
      msg['file']=writableEntry;
     
     // All of Chrome API is asynchronous! Use callbacks:
      chrome.fileSystem.getDisplayPath(writableEntry, function(path) {
        document.querySelector('#file_path').value = path;
      });
     EventBus.publish(Messages.MsgSave, msg);
    });
  });
  
  sendMessage.addEventListener('click', function() {
    EventBus.publish(Messages.SendingMsg,MenuBar.Messages.SendMsg);
  });
  
  EventBus.subscribe(MenuBar.Messages, function(msg){
    
    if (msg.name==MenuBar.Messages.SaveRequired.name) {
      document.getElementById("save_message").disabled=false;
    }
    
    if (msg.name==MenuBar.Messages.Hide.name) {
      DOMHelpers.hide("menu_wnd");
    }
    
    if (msg.name==MenuBar.Messages.Show.name) {
      DOMHelpers.show("menu_wnd");
    }
  });
};

MenuBar.Messages={};
MenuBar.Messages.SendMsg={name:"MenuBar.SendMsg"};
MenuBar.Messages.SaveMsg={name:"MenuBar.SaveMsg"};
MenuBar.Messages.SaveRequired={name:"MenuBar.SaveRequired"};
MenuBar.Messages.LoadMsg={name:"MenuBar.LoadMsg"};
MenuBar.Messages.Hide={name:"MenuBar.Hide"};
MenuBar.Messages.Show={name:"MenuBar.Show"};
