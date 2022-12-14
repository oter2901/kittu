import * as React from 'react';
import classnames from 'classnames';
import {
  Button,
  ButtonPropsBase,
  ButtonRefObject,
} from '@kittu/ui-kit.components.button';

import { OpenStateControls } from '@kittu/ui-kit.hooks.use-open-state';

import cls from './dropdown.module.scss';

export type DropdownButtonProps<P extends {} = {}> = OpenStateControls &
  ButtonPropsBase &
  JSX.IntrinsicElements['button'] &
  P & {
    hideArrows?: boolean;
  };

export const DropdownButton = (props: DropdownButtonProps) => {
  const {
    // remove this from ...rest
    handleClose,
    handleOpen,
    setOpenState,
    // using
    handleToggle,
    isOpen,
    children,
    className,
    hideArrows = false,
    ...rest
  } = props;
  return (
    <Button
      className={classnames(cls['dropdown-toggle'], className, {
        [cls['dropdown-toggle-no-arrows']]: hideArrows,
      })}
      onClick={handleOpen}
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded={isOpen ? 'true' : 'false'}
      {...rest}
    >
      {children}
    </Button>
  );
};

DropdownButton.defaultProps = {
  children: 'Action',
};

DropdownButton.displayName = 'DropdownButton';

export default DropdownButton;
