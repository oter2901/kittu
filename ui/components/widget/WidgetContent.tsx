import { createSimpleComponent } from '@kittu/ui.core.create-simple-component';
//@ts-ignore
import cls from './widget.module.scss';

export const WidgetContent = createSimpleComponent({
  displayName: 'WidgetContent',
  className: cls['card-body'],
  Component: 'div',
});

export default WidgetContent;
