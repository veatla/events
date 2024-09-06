'use strict';

const addAppEventListener = function(type, func) {
  var _a;
  if (!window.veatla.listeners[type])
    window.veatla.listeners[type] = /* @__PURE__ */ new Set();
  (_a = window.veatla.listeners[type]) == null ? void 0 : _a.add(func);
  return () => {
    var _a2;
    (_a2 = window.veatla.listeners[type]) == null ? void 0 : _a2.delete(func);
  };
};
const dispatchAppEvent = function(type, ...data) {
  const dispatch = window.veatla.listeners[type];
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
  if (!window.veatla) {
    window.veatla = {
      emit: dispatchAppEvent,
      on: addAppEventListener,
      listeners: {}
    };
  }
}

exports.addAppEventListener = addAppEventListener;
exports.dispatchAppEvent = dispatchAppEvent;
