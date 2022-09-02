import { createSimpleComponent } from '@kittu/ui-kit.core.create-simple-component';
import { AnyTag } from '@kittu/ui-kit.core.types';

import cls from './navSectionTitle.module.scss';

export const NavSectionTitle: AnyTag = createSimpleComponent({
  displayName: 'NavSectionTitle',
  className: cls['nav-section-title'],
  Component: 'span',
});

export default NavSectionTitle;
