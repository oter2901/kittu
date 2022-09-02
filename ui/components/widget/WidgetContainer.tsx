import { createSimpleComponent } from '@kittu/ui.core.create-simple-component';
//@ts-ignore
import cls from './widget.module.scss';

export const WidgetContainer = createSimpleComponent({
  displayName: 'WidgetContainer',
  className: cls['card-container'],
  Component: 'div',
});

export default WidgetContainer;
