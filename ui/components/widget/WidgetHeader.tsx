import { createSimpleComponent } from '@kittu/ui-kit.core.create-simple-component';
import { AnyTag } from '@kittu/ui-kit.core.types';
import cls from './widget.module.scss';

export const WidgetHeader: AnyTag = createSimpleComponent({
  displayName: 'WidgetHeader',
  className: cls['card-header'],
  Component: 'div',
});

export default WidgetHeader;
