import React from 'react';
import classnames from 'classnames';
import {
  OuterEventsHandler,
  OuterEventsHandlerProps,
} from '@kittu/ui-kit.core.outer-events-handler';
import { Button } from '@kittu/ui-kit.components.button';
import { Overlay, OverlayControlProps } from './components/Overlay';

import cls from './modal.module.scss';
import { ModalBody } from './components/ModalBody';
import { ModalHeader } from './components/ModalHeader';
import { ModalFooter } from './components/ModalFooter';
import { ModalTitle } from './components/ModalTitle';
import { ModalBodySecondary } from './components/ModalBodySecondary';

export type ModalProps = Omit<OuterEventsHandlerProps, 'onOuterEvent'> &
  OverlayControlProps & {
    lg?: boolean;
    sm?: boolean;
    full?: boolean;
    handleClose?: () => void;
    hideCloseButton?: boolean;
    disablePortal?: boolean;
    closeOnOuterClick?: boolean;
  };

export const Modal = (props: ModalProps) => {
  const {
    isOpen,
    handleClose,
    sm,
    full,
    lg,
    children,
    className,
    hideCloseButton = false,
    portalEl,
    disablePortal,
    closeOnOuterClick,
    ...rest
  } = props;

  const el = (
    <OuterEventsHandler
      className={classnames(cls['modal'], className, {
        [cls['lg']]: lg,
        [cls['sm']]: sm,
        [cls['full']]: full,
      })}
      onOuterEvent={closeOnOuterClick ? handleClose : undefined}
      {...rest}
    >
      {handleClose && !hideCloseButton && (
        <Button
          onClick={handleClose}
          aria-label="Close"
          square
          clear
          className={cls['modal-btn-close']}
        >
          <span className={cls['modal-close-icon']} />
        </Button>
      )}
      {children}
    </OuterEventsHandler>
  );

  if (disablePortal) {
    return el;
  }
  return (
    <Overlay isOpen={isOpen} portalEl={portalEl}>
      {el}
    </Overlay>
  );
};

Modal.displayName = 'Modal';

Modal.Body = ModalBody;
Modal.BodySecondary = ModalBodySecondary;
Modal.Header = ModalHeader;
Modal.Footer = ModalFooter;
Modal.Title = ModalTitle;

export default Modal;
