const eventUtil = {
  addEvent: function (element, eventType, handler) {
    if (element.attachEvent) {
      element.attachEvent('on' + eventType, handler);
    } else if (element.addEventListener) {
      element.addEventListener(eventType, handler, false);
    } else {
      element['on' + eventType] = handler;
    }
  },
  removeEvent: function () {

  },

  getTarget: function () {
  },
  getEvent: function () {

  },
  stopPropagation: function (event) {
    if (event.stopPropagation) {
      event.stopPropagation();
    } else {
      event.cancelBubble = true;
    }
  },
  preventDefault: function (event) {
    if (event.preventDefault) {
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
  }
};

