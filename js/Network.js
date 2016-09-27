var Network={};

Network.setConnection=function(ip, port) {
  Network.ip = ip;
  Network.port = parseInt(port);
};

Network.createCallBack=function(createInfo) {
  if (chrome.runtime.lastError) {
      error('Unable to create socket: ' + chrome.runtime.lastError.message);
    }

    Network._socketId = createInfo.socketId;
    chrome.sockets.tcp.connect(Network._socketId, Network.ip, Network.port, Network.onConnectionCompleted);
};

Network.onConnectionCompleted=function(resultCode) {
  if (resultCode < 0) {
      console.log('Unable to connect to server');
      return;
  }
  chrome.sockets.tcp.onReceive.addListener(function(info) {
  if (info.socketId != Network._socketId)
    return;
    // info.data is an arrayBuffer.
    Network.toString(info.data, function(aString) {
      console.log(aString);
    });
  });
  
  console.log('Ready to send: ' + Network.message);
  var number = parseInt('0b',16);
  var VTab = String.fromCharCode(number);
  var VERTICAL_TAB = '\u000b';
  var FILE_SEPARATOR = '\u001c';
  var CARRIAGE_RETURN = '\u000d';
  var fullMessage = VERTICAL_TAB + Network.message + FILE_SEPARATOR + CARRIAGE_RETURN;
  console.log("full Msg: " + fullMessage);
  Network.toArrayBuffer(fullMessage, function(arrayBuffer) {
      Network.toString(arrayBuffer, function(aString) {
        console.log(aString);
      });
      
      chrome.sockets.tcp.send(Network._socketId, arrayBuffer, function(a) {
        console.log(a);
        Network.toString(a, function(aString) {
          console.log(aString);  
        });
      });
  });
};

Network.toArrayBuffer=function(str, callBack) {
    var bb = new Blob([str]);
    var f = new FileReader();
    f.onload = function(e) {
       callBack(e.target.result);
    };
    f.readAsArrayBuffer(bb);
};

Network.toString = function(buf, callback) {
    var reader = new FileReader();
    reader.onload = function(e) {
      callback(e.target.result);
    };
    var blob=new Blob([ buf ], { type: 'application/octet-stream' });
    reader.readAsText(blob);
};

Network.sentMessage=function(message, messageSendSuccess, messageSendError) {
  var _socketId;
  Network.message = message;
  //create socket
  chrome.sockets.tcp.create({},Network.createCallBack);
};

