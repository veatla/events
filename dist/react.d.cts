import { EventsTypes, EventsTypesFuncs } from './index.cjs';

declare const useAppEventListener: <T extends EventsTypes>(type: T, func: EventsTypesFuncs[T], dependencies: React.DependencyList) => void;

export { useAppEventListener };
