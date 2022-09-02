import { createSimpleComponent } from '@kittu/ui-kit.core.create-simple-component';
import { AnyTag } from '@kittu/ui-kit.core.types';
import classnames from 'classnames';
import cls from './scrollArea.module.scss';

export const ScrollArea: AnyTag = createSimpleComponent({
  displayName: 'ScrollArea',
  className: cls['scroll-area'],
  Component: 'div',
});

export const ScrollAreaXOverflow: AnyTag = createSimpleComponent({
  displayName: 'ScrollArea',
  className: classnames(cls['scroll-area'], cls['scroll-area-x-overflow-hack']),
  Component: 'div',
});

export default ScrollArea;
