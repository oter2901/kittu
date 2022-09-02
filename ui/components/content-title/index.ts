import { createSimpleComponent } from '@kittu/ui.core.create-simple-component';

import cls from './contentTitle.module.scss';

export const ContentTitle = createSimpleComponent({
  displayName: 'ContentTitle',
  className: cls['content-title'],
  Component: 'span',
});

export default ContentTitle;
