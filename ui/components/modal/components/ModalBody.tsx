import { createSimpleComponent } from '@kittu/ui.core.create-simple-component';

import cls from '../modal.module.scss';
export const ModalBody = createSimpleComponent({
  Component: 'div',
  className: cls['modal-body'],
  displayName: 'ModalBody',
});
