import { createSimpleComponent } from '@kittu/ui.core.create-simple-component';

import cls from './navTitle.module.scss';

export const NavTitle = createSimpleComponent({
  displayName: 'NavTitle',
  className: cls['nav-title'],
  Component: 'span',
});

export default NavTitle;
