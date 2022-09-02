import { createSimpleComponent } from '@kittu/ui.core.create-simple-component';
//@ts-ignore
import cls from './datepicker.module.scss';

export const DatepickerContainer = createSimpleComponent({
  displayName: 'DatepickerContainer',
  className: cls['datepicker-container'],
  Component: 'div',
});

export default DatepickerContainer;
