import { createSimpleComponent } from '@kittu/ui.core.create-simple-component';
//@ts-ignore
import cls from './containerHorizontal.module.scss';

export const ContainerHorizontal = createSimpleComponent({
  displayName: 'ContainerHorizontal',
  className: cls['container-horizontal'],
  Component: 'div',
});

export default ContainerHorizontal;
