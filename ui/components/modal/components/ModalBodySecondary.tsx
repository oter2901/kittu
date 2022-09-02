import classnames from 'classnames';

import { createSimpleComponent } from '@kittu/ui.core.create-simple-component';

import cls from '../modal.module.scss';
export const ModalBodySecondary = createSimpleComponent({
  Component: 'div',
  className: classnames(cls['modal-body'], cls['modal-body-secondary']),
  displayName: 'ModalBodySecondary',
});
