import { createSimpleComponent } from '@kittu/ui.core.create-simple-component';

import cls from '../modal.module.scss';
export const ModalFooter = createSimpleComponent({
  Component: 'div',
  className: cls['modal-footer'],
  displayName: 'ModalFooter',
});
