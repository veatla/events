import { useEffect } from 'react';
import { addAppEventListener } from './index.mjs';

const useAppEventListener = (type, func, dependencies) => useEffect(() => addAppEventListener(type, func), [...dependencies]);

export { useAppEventListener };
