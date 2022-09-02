import { createSimpleComponent } from '@kittu/ui-kit.core.create-simple-component';
import { AnyTag } from '@kittu/ui-kit.core.types';

import cls from './navTitle.module.scss';

export const NavTitle: AnyTag = createSimpleComponent({
  displayName: 'NavTitle',
  className: cls['nav-title'],
  Component: 'span',
});

export default NavTitle;
