import { createSimpleComponent } from '@kittu/ui.core.create-simple-component';
//@ts-ignore
import cls from './widget.module.scss';

export const WidgetHeader = createSimpleComponent({
  displayName: 'WidgetHeader',
  className: cls['card-header'],
  Component: 'div',
});

export default WidgetHeader;
