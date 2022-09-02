import { createSimpleComponent } from '@kittu/ui.core.create-simple-component';

import cls from '../modal.module.scss';
export const ModalHeader = createSimpleComponent({
  Component: 'div',
  className: cls['modal-header'],
  displayName: 'ModalHeader',
});
