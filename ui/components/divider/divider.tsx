import React, { ReactNode } from 'react';

export type DividerProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Divider({ children }: DividerProps) {
  return (
    <div>
      {children}
    </div>
  );
}
