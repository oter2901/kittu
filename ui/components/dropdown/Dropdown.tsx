import * as React from 'react';
import classnames from 'classnames';

import {
  OuterEventsHandler,
  OuterEventsHandlerProps,
} from '@kittu/ui.core.outer-events-handler';
import {
  useOpenState,
  OpenStateControls,
} from '@kittu/ui.hooks.use-open-state';
import { AnyTag } from '@kittu/ui.core.types';

import DropdownMenu from './DropdownMenu';
import DropdownButton from './DropdownButton';

import cls from './dropdown.module.scss';

export enum DropdownMenuPosition {
  'left-top' = 'left-top',
  'left-center' = 'left-center',
  'left-bottom' = 'left-bottom',
  'right-top' = 'right-top',
  'right-center' = 'right-center',
  'right-bottom' = 'right-bottom',
  'top-left' = 'top-left',
  'top-right' = 'top-right',
  'top-center' = 'top-center',
  'bottom-left' = 'bottom-left',
  'bottom-right' = 'bottom-right',
  'bottom-center' = 'bottom-center',
}

export type DropdownProps<
  BC extends AnyTag,
  MC extends AnyTag
> = OuterEventsHandlerProps & {
  ButtonComponent?: BC;
  buttonProps?: Omit<React.ComponentProps<BC>, keyof OpenStateControls>;
  MenuComponent?: MC;
  menuProps?: Omit<React.ComponentProps<MC>, keyof OpenStateControls>;
  menuPosition?: DropdownMenuPosition;
  buttonText?: React.ReactNode;
  openControls?: OpenStateControls;
  block?: boolean;
  closeOnOptionClick?: boolean;
} & Children;

type Children =
  | { children?: (props: OpenStateControls) => React.ReactNode }
  | { children?: JSX.Element | JSX.Element[] };

export const Dropdown = <
  BC extends AnyTag = typeof DropdownButton,
  MC extends AnyTag = typeof DropdownMenu
>(
  props: DropdownProps<BC, MC>
) => {
  const {
    ButtonComponent = DropdownButton,
    buttonProps = {},
    MenuComponent = DropdownMenu,
    menuProps = {},
    children: childrenProp,
    menuPosition = DropdownMenuPosition['bottom-right'],
    buttonText,
    className,
    openControls: externalOpenControls,
    block,
    closeOnOptionClick = false,
    ...rest
  } = props;

  const openControls = externalOpenControls || useOpenState(false);

  const children =
    (typeof childrenProp === 'function' && childrenProp(openControls)) ||
    (closeOnOptionClick &&
      React.Children.map(
        childrenProp as React.ReactElement,
        (el: React.ReactElement<any>) => {
          if (el) {
            try {
              return React.cloneElement(el, {
                onClick: (e: React.MouseEvent) => {
                  openControls.handleClose();
                  if (el.props.onClick) {
                    el.props.onClick(e);
                  }
                },
              });
            } catch (e) {
              return el;
            }
          }
          return el;
        }
      )) ||
    childrenProp;

  return (
    <OuterEventsHandler
      className={classnames(cls['dropdown'], 'btn-group', className)}
      onOuterEvent={openControls.isOpen ? openControls.handleToggle : null}
      {...rest}
    >
      <DropdownButton {...openControls} {...buttonProps} block={block}>
        {buttonText}
      </DropdownButton>
      <DropdownMenu
        {...menuProps}
        {...openControls}
        menuPosition={menuPosition}
      >
        {typeof children === 'function' ? children(openControls) : children}
      </DropdownMenu>
    </OuterEventsHandler>
  );
};

Dropdown.displayName = 'Dropdown';

export default Dropdown;
