import { useCallback, useState } from "react";

export const useCount = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = useCallback(
    () => setCount((prevState) => prevState + 1),
    [count]
  );
  const handleDecrement = useCallback(
    () => setCount((prevState) => prevState - 1),
    [count]
  );
  const resetCount = useCallback(() => setCount(0), []);

  return { count, handleIncrement, handleDecrement, resetCount };
};
