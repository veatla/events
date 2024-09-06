export type EventsTypes = keyof VeatlaEvents;
export type EventsTypesFuncs = VeatlaEvents;

export const addAppEventListener = function <T extends EventsTypes>(
  type: T,
  func: EventsTypesFuncs[T]
) {
  if (!window.veatla.listeners[type]) window.veatla.listeners[type] = new Set();

  window.veatla.listeners[type]?.add(func);

  return () => {
    window.veatla.listeners[type]?.delete(func);
  };
};

export const dispatchAppEvent = function <T extends EventsTypes>(
  type: T,
  ...data: Parameters<EventsTypesFuncs[T]>
) {
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
  window.veatla = {
    emit: dispatchAppEvent,
    on: addAppEventListener,
    listeners: {},
  };
}
