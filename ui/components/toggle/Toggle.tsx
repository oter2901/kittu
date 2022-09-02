import * as React from 'react';
import { BaseInput, BaseInputProps } from '@kittu/ui.components.base-input';

export const Toggle = (props: BaseInputProps) => {
  return <BaseInput {...props} toggle />;
};

Toggle.displayName = 'Toggle';

export default Toggle;
