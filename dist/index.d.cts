interface Events extends Veatla.Events {
    [key: string]: (...args: any[]) => void;
}
type EventsTypes = keyof Events;
type EventsTypesFuncs = Events;
declare const addAppEventListener: <T extends EventsTypes>(type: T, func: EventsTypesFuncs[T]) => () => void;
declare const dispatchAppEvent: <T extends EventsTypes>(type: T, ...data: Parameters<EventsTypesFuncs[T]>) => void;

export { addAppEventListener, dispatchAppEvent };
