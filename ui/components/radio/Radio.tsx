import * as React from 'react';
import { BaseInput, BaseInputProps } from '@kittu/ui.components.base-input';

export const Radio = (props: BaseInputProps) => {
  return <BaseInput {...props} type="radio" />;
};

Radio.displayName = 'Radio';

export default Radio;
