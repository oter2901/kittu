import { createSimpleComponent } from '@kittu/ui-kit.core.create-simple-component';
import { AnyTag } from '@kittu/ui-kit.core.types';

import cls from './widget.module.scss';

export const WidgetTable: AnyTag = createSimpleComponent<'table'>({
  displayName: 'WidgetTable',
  className: cls['card-table'],
  Component: 'table',
});

export default WidgetTable;
