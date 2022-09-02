import { createSimpleComponent } from '@kittu/ui.core.create-simple-component';
import cls from './topBar.module.scss';

export const TopBar = createSimpleComponent({
  displayName: 'TopBar',
  className: cls['top-bar'],
  Component: 'section',
});

export * from './components';
export default TopBar;
