import { createSimpleComponent } from '@kittu/ui-kit.core.create-simple-component';
import { AnyTag } from '@kittu/ui-kit.core.types';

import cls from './navSection.module.scss';

export const NavSection: AnyTag = createSimpleComponent({
  displayName: 'NavSection',
  className: cls['nav-section'],
  Component: 'div',
});

export default NavSection;
