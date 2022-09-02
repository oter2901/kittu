import { createSimpleComponent } from '@kittu/ui.core.create-simple-component';
//@ts-ignore
import cls from './widget.module.scss';

export const WidgetTable = createSimpleComponent<'table'>({
  displayName: 'WidgetTable',
  className: cls['card-table'],
  Component: 'table',
});

export default WidgetTable;
