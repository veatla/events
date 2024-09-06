declare global {
    export interface VeatlaEvents {
    }
    export interface Window {
        VeatlaEvents: {
            listeners: IEvents;
            emit: typeof dispatchAppEvent;
            on: typeof addAppEventListener;
        };
    }
}
interface Events extends VeatlaEvents {
    [key: string]: (...args: any[]) => void;
}
type EventsTypes = keyof Events;
type EventsTypesFuncs = Events;
type IEvents = {
    [K in EventsTypes]?: Set<EventsTypesFuncs[K]>;
};
declare const addAppEventListener: <T extends EventsTypes>(type: T, func: EventsTypesFuncs[T]) => () => void;
declare const dispatchAppEvent: <T extends EventsTypes>(type: T, ...data: Parameters<EventsTypesFuncs[T]>) => void;

export { addAppEventListener, dispatchAppEvent };
