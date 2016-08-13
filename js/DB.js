var DB={};

DB.data={};
DB.loaded={};

DB.getSegmentInfo=function(segmentId) {
  var segmentName = segmentId.split("-")[0].toLowerCase();
  if (!hasOwnProperty(DB.data, segmentName)) {
    //load datafile
    DB.loadData(segmentName);
    DB.loaded[segmentName]=true;
  }
  return DB.data[segmentId];
};

DB.loadData=function(segmentName) {
  var file = segmentName + ".txt";
  fileEntry.file(function(file) {
    var reader = new FileReader();

    reader.onerror = errorHandler;
    reader.onload = function(e) {
      callback(e.target.result);
    };

    reader.readAsText(file);
  });
};

function includeJS(jsFilePath) {
    var js = document.createElement("script");

    js.type = "text/javascript";
    js.src = jsFilePath;

    document.body.appendChild(js);
}

includeJS("../data/msh.js");
