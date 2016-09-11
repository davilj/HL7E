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




View.init();
