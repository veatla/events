declare global {
    export interface VeatlaEvents {}
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

export const addAppEventListener = function <T extends EventsTypes>(
    type: T,
    func: EventsTypesFuncs[T]
) {
    if (!window.VeatlaEvents.listeners[type]) window.VeatlaEvents.listeners[type] = new Set();

    window.VeatlaEvents.listeners[type]?.add(func);

    return () => {
        window.VeatlaEvents.listeners[type]?.delete(func);
    };
};

export const dispatchAppEvent = function <T extends EventsTypes>(
    type: T,
    ...data: Parameters<EventsTypesFuncs[T]>
) {
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
            listeners: {},
        }
    }
}
