import * as React from 'react';
import { AnyTag } from '@kittu/ui.core.types';
import classnames from 'classnames';
import { Button, ButtonProps } from '@kittu/ui.components.button';
//@ts-ignore
import cls from './dropdown.module.scss';

export const DropdownItem: typeof Button = <T extends AnyTag = typeof Button>(
  props: ButtonProps<T>
) => {
  const { className, ...rest } = props;

  return (
    <Button className={classnames(cls['dropdown-item'], className)} {...rest} />
  );
};

DropdownItem.displayName = 'DropdownItem';
