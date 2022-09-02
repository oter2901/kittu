import { createSimpleComponent } from '@kittu/ui.core.create-simple-component';
import classnames from 'classnames';
import cls from './scrollArea.module.scss';

export const ScrollArea = createSimpleComponent({
  displayName: 'ScrollArea',
  className: cls['scroll-area'],
  Component: 'div',
});

export const ScrollAreaXOverflow = createSimpleComponent({
  displayName: 'ScrollArea',
  className: classnames(cls['scroll-area'], cls['scroll-area-x-overflow-hack']),
  Component: 'div',
});

export default ScrollArea;
