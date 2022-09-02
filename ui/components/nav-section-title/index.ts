import { createSimpleComponent } from '@kittu/ui.core.create-simple-component';

import cls from './navSectionTitle.module.scss';

export const NavSectionTitle = createSimpleComponent({
  displayName: 'NavSectionTitle',
  className: cls['nav-section-title'],
  Component: 'span',
});

export default NavSectionTitle;
