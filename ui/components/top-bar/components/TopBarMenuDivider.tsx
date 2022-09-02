import { createSimpleComponent } from '@kittu/ui-kit.core.create-simple-component';
import cls from './topBarMenuDivider.module.scss';

export const TopBarMenuDivider = createSimpleComponent({
  displayName: 'TopBarMenuDivider',
  className: cls['top-bar-menu-divider'],
  Component: 'div',
});

export default TopBarMenuDivider;
