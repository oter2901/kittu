import { createSimpleComponent } from '@kittu/ui-kit.core.create-simple-component';
import { AnyTag } from '@kittu/ui-kit.core.types';

import cls from './datepicker.module.scss';

export const DatepickerContainer: AnyTag = createSimpleComponent({
  displayName: 'DatepickerContainer',
  className: cls['datepicker-container'],
  Component: 'div',
});

export default DatepickerContainer;
