import classnames from 'classnames';
import { AnyTag } from '@kittu/ui-kit.core.types';
import { createSimpleComponent } from '@kittu/ui-kit.core.create-simple-component';

import cls from '../modal.module.scss';
export const ModalBodySecondary: AnyTag = createSimpleComponent({
  Component: 'div',
  className: classnames(cls['modal-body'], cls['modal-body-secondary']),
  displayName: 'ModalBodySecondary',
});
