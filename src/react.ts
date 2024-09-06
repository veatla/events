import { useEffect } from "react";
import { addAppEventListener } from "./index";

export const useAppEventListener = (
    ...args: Parameters<typeof addAppEventListener>
) => useEffect(() => addAppEventListener(...args), []);
