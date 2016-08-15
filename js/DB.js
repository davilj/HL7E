var DB={};
DB.data={};

DB.getSegmentInfo=function(segmentId) {
  var segmentName = segmentId.split("-")[0].toLowerCase();
  var segmentDB = DB.data[segmentName];
  return segmentDB[segmentId];
};

function includeJS(jsFilePath) {
    var js = document.createElement("script");

    js.type = "text/javascript";
    js.src = jsFilePath;

    document.body.appendChild(js);
}

includeJS("../data/msh.js");
includeJS("../data/nk1.js");
includeJS("../data/obx.js");
includeJS("../data/pid.js");
