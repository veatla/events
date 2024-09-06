'use strict';

const addAppEventListener = function(type, func) {
  var _a;
  if (!window.VeatlaEvents.listeners[type])
    window.VeatlaEvents.listeners[type] = /* @__PURE__ */ new Set();
  (_a = window.VeatlaEvents.listeners[type]) == null ? void 0 : _a.add(func);
  return () => {
    var _a2;
    (_a2 = window.VeatlaEvents.listeners[type]) == null ? void 0 : _a2.delete(func);
  };
};
const dispatchAppEvent = function(type, ...data) {
  const dispatch = window.VeatlaEvents.listeners[type];
  if (dispatch && dispatch.size > 0) {
    for (const func of Array.from(dispatch)) {
      try {
        func(...data);
      } catch (error) {
        console.log(`DISPATCH EVENT ERROR:: ${type}`, error);
      }
    }
  }
};
if (typeof window !== "undefined") {
  if (!window.VeatlaEvents) {
    window.VeatlaEvents = {
      emit: dispatchAppEvent,
      on: addAppEventListener,
      listeners: {}
    };
  }
}

exports.addAppEventListener = addAppEventListener;
exports.dispatchAppEvent = dispatchAppEvent;
