type EventsTypes = keyof VeatlaEvents;
type EventsTypesFuncs = VeatlaEvents;
declare const addAppEventListener: <T extends EventsTypes>(type: T, func: EventsTypesFuncs[T]) => () => void;
declare const dispatchAppEvent: <T extends EventsTypes>(type: T, ...data: Parameters<EventsTypesFuncs[T]>) => void;

export { type EventsTypes, type EventsTypesFuncs, addAppEventListener, dispatchAppEvent };
