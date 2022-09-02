import { createSimpleComponent } from '@kittu/ui-kit.core.create-simple-component';
import { AnyTag } from '@kittu/ui-kit.core.types';

import cls from './widget.module.scss';

export const WidgetContent: AnyTag = createSimpleComponent({
  displayName: 'WidgetContent',
  className: cls['card-body'],
  Component: 'div',
});

export default WidgetContent;
