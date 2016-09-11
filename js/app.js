/*
Reading a hl7v2.4 edi message and display as segment with definition from hl7 v2.4 spec
Author: Danie Viljoen davilj@gmail.com
*/

var chosenEntry = null;

var saveFileButton = document.querySelector('#save_file');
var output = document.querySelector('output');

function errorHandler(e) {
  console.error(e);
}

function readAsText(fileEntry, callback) {
  fileEntry.file(function(file) {
    var reader = new FileReader();

    reader.onerror = errorHandler;
    reader.onload = function(e) {
      callback(e.target.result);
    };

    reader.readAsText(file);
  });
}


View.init();
