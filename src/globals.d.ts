declare global {
  namespace Veatla {
    export interface Events {}
  }
  export interface Window {
    VeatlaEvents: {
      listeners: {
        [K in EventsTypes]?: Set<EventsTypesFuncs[K]>
      };
      emit: typeof dispatchAppEvent;
      on: typeof addAppEventListener;
    };
  }
}
export {};