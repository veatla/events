declare global {
  export interface VeatlaEvents
    extends Record<string, (...args: any[]) => void> {}
  export interface Window {
    veatla: {
      listeners: {
        [K in EventsTypes]?: Set<EventsTypesFuncs[K]>;
      };
      emit: typeof dispatchAppEvent;
      on: typeof addAppEventListener;
    };
  }
}
export {};
