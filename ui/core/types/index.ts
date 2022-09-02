import * as React from 'react';

/**
 * string or react component
 */
export type AnyTag =
  | keyof JSX.IntrinsicElements
  // tslint:disable-next-line: no-any
  | React.JSXElementConstructor<any>;

/**
 * Get props of string or react component
 */
export type TagProps<T extends AnyTag> = React.ComponentProps<T>;

/**
 * Merge props with tag props
 */
export type PropsWithTagProps<
  T extends AnyTag,
  Props = {}
> = React.ComponentProps<T> & Props;

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
