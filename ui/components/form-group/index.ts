import { createSimpleComponent } from '@kittu/ui.core.create-simple-component';
 
import cls from './formGroup.module.scss';

export const FormGroup = createSimpleComponent({
  displayName: 'FormGroup',
  className: cls['form-group'],
  Component: 'div',
});

export default FormGroup;
