var MsgSegment = {};

MsgSegment.Init=function() {
  var saveSegment = document.getElementById("save_segment");
  var cancel = document.getElementById("cancel_segment");
  
  saveSegment.addEventListener('click', function() {
    var selected = View.selectedField;
    var info = selected.split("-");
    var segmentIndex = info[0];
    var segmentName = info[1];
    var fieldIndex = info[2];
    var fieldElement = document.getElementById("segmentEdit_components");
    var components = fieldElement.childNodes;
    var numberOfComponents = components.length;
    var componentIndex=0;
    var newComponents = [];
    for (componentIndex; componentIndex<numberOfComponents; componentIndex++) {
      var inputComponent = components[componentIndex];
      var value = inputComponent.value;
      newComponents.push(value);
    }
    var trId = selected;
    var tr = document.getElementById(trId);
    DOMHelpers.removeChildren(trId);
    View.formatFieldInDetail(tr, segmentName, fieldIndex , newComponents);
    View.parsedMessage.segments[segmentIndex].fields[parseInt(fieldIndex)-1]=newComponents;
    
    DOMHelpers.hide("segmentEdit");
    DOMHelpers.show("msg_segment_wnd");
    DOMHelpers.removeClass("msg_segment_menu", "menu");
    DOMHelpers.addClass("msg_segment_menu", "save_required");
  });
  
  cancel.addEventListener('click', function() {
      DOMHelpers.hide("segmentEdit");
      DOMHelpers.show("msg_segment_wnd");
  });
  
  //eventbus listener
  EventBus.subscribe(Messages.SendingMsg,MsgSegment.messageHandler);
};

MsgSegment.messageHandler=function(msg) {
  if (msg==Messages.Start) {
    DOMHelpers.show("sendMessage_wnd");
  }
};

