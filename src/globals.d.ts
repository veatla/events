declare global {
  export interface VeatlaEvents {}
  export interface Window {
    veatla: {
      listeners: {
        [K in EventsTypes]?: Set<EventsTypesFuncs[K]>
      };
      emit: typeof dispatchAppEvent;
      on: typeof addAppEventListener;
    };
  }
}
export {};