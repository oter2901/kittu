import { createSimpleComponent } from '@kittu/ui-kit.core.create-simple-component';
import { AnyTag } from '@kittu/ui-kit.core.types';

import cls from './formGroup.module.scss';

export const FormGroup: AnyTag = createSimpleComponent({
  displayName: 'FormGroup',
  className: cls['form-group'],
  Component: 'div',
});

export default FormGroup;
