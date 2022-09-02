import { createSimpleComponent } from '@kittu/ui-kit.core.create-simple-component';
import cls from './topBarContainer.module.scss';

export const TopBarLinkContainer = createSimpleComponent({
  displayName: 'TopBarLinkContainer',
  className: cls['top-bar-link-container'],
  Component: 'nav',
});

export default TopBarLinkContainer;
