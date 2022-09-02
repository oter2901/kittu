import { createSimpleComponent } from '@kittu/ui.core.create-simple-component';
import cls from './topBarSection.module.scss';

export const TopBarSection = createSimpleComponent({
  displayName: 'TopBarSection',
  className: cls['top-bar-section'],
  Component: 'div',
});

export default TopBarSection;
