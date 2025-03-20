import { useLayoutEffect, useState } from "react";

interface LocalStateProps<T> {
  key: string;
  initialValue: T;
}

const useLocalState = <T>({ key, initialValue }: LocalStateProps<T>) => {
  const [state, setState] = useState(initialValue);

  useLayoutEffect(() => {
    const localState = localStorage.getItem(key);
    if (localState) {
      setState(JSON.parse(localState));
    }
  }, [key]);

  return {
    state,
    setState: (value: T) => {
      setState(value);
      localStorage
        .setItem(key, JSON.stringify(value));
    }
  };
}

export default useLocalState;