import { createSimpleComponent } from '@kittu/ui.core.create-simple-component';
import cls from './containerVertical.module.scss';

export const ContainerVertical = createSimpleComponent({
  displayName: 'ContainerVertical',
  className: cls['container-vertical'],
  Component: 'div',
});

export default ContainerVertical;
