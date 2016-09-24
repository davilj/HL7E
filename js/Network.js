var Network={};

Network.setConnection=function(ip, port) {
  Network.ip = ip;
  Network.port = port;
};

Network.sentMessage=function(message, messageSendSuccess, messageSendError) {
  var _socketId;
  //create socket
  chrome.sockets.tcp.create({},
    function (createInfo) {
        console.log(createInfo.socketId);
        chrome.sockets.tcp.connect(createInfo.socketId,
            Network.ip, Network.port,
            function (result) {
                if (chrome.runtime.lastError)
                    console.log(chrome.runtime.lastError.message);
                else {
                    console.log(result);
                }
            }
        );
    }
  );
};

