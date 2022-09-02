import { createSimpleComponent } from '@kittu/ui-kit.core.create-simple-component';
import { AnyTag } from '@kittu/ui-kit.core.types';

import cls from './contentTitle.module.scss';

export const ContentTitle: AnyTag = createSimpleComponent({
  displayName: 'ContentTitle',
  className: cls['content-title'],
  Component: 'span',
});

export default ContentTitle;
