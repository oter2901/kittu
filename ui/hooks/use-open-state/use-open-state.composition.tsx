import React from 'react';
import { useOpenState } from './use-open-state';

export const BasicuseOpenState = () => {
  const { count, increment } = useOpenState();

  return (
    <>
      <h1>The count is {count}</h1>
      <button onClick={increment}>increment</button>
    </>
  );
};
