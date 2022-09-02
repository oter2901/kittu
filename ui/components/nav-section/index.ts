import { createSimpleComponent } from '@kittu/ui.core.create-simple-component';

import cls from './navSection.module.scss';

export const NavSection = createSimpleComponent({
  displayName: 'NavSection',
  className: cls['nav-section'],
  Component: 'div',
});

export default NavSection;
