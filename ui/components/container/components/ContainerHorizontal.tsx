import { createSimpleComponent } from '@kittu/ui-kit.core.create-simple-component';
import { AnyTag } from '@kittu/ui-kit.core.types';

import cls from './containerHorizontal.module.scss';

export const ContainerHorizontal: AnyTag = createSimpleComponent({
  displayName: 'ContainerHorizontal',
  className: cls['container-horizontal'],
  Component: 'div',
});

export default ContainerHorizontal;
