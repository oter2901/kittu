import React, { ReactNode } from 'react';
import classnames from 'classnames';
// @ts-ignore
import cls from './alert.module.scss';

export type AlertProps = JSX.IntrinsicElements['div'] & {
  primary?: boolean;
  success?: boolean;
  warning?: boolean;
  danger?: boolean;
  leftElement?: ReactNode;
  rightElement?: ReactNode;
};
export function Alert({
  className,
  primary,
  success,
  warning,
  danger,
  children,
  leftElement,
  rightElement,
  ...rest
}: AlertProps) {
  return (
    <div
      role="alert"
      className={classnames(cls['alert'], className, {
        [cls['alert-primary']]: primary,
        [cls['alert-success']]: success,
        [cls['alert-warning']]: warning,
        [cls['alert-danger']]: danger,
      })}
      {...rest}
    >
      {leftElement && <div className={cls['alert-left-el']}>{leftElement}</div>}
      <div className={cls['alert-body']}>{children}</div>
      {rightElement && (
        <div className={cls['alert-right-el']}>{rightElement}</div>
      )}
    </div>
  );
}
