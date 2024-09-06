import { useEffect } from "react";
import { addAppEventListener, EventsTypes, EventsTypesFuncs } from "./index";

export const useAppEventListener = <T extends EventsTypes>(
  type: T,
  func: EventsTypesFuncs[T],
  dependencies: React.DependencyList
) => useEffect(() => addAppEventListener(type, func), [...dependencies]);
