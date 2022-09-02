import { createSimpleComponent } from '@kittu/ui-kit.core.create-simple-component';
import { AnyTag } from '@kittu/ui-kit.core.types';

import cls from './widget.module.scss';

export const WidgetContainer: AnyTag = createSimpleComponent({
  displayName: 'WidgetContainer',
  className: cls['card-container'],
  Component: 'div',
});

export default WidgetContainer;
