import { createSimpleComponent } from '@kittu/ui-kit.core.create-simple-component';
import { AnyTag } from '@kittu/ui-kit.core.types';

import cls from '../modal.module.scss';
export const ModalBody: AnyTag = createSimpleComponent({
  Component: 'div',
  className: cls['modal-body'],
  displayName: 'ModalBody',
});
