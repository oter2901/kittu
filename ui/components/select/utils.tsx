import React from 'react';
import { SelectOption } from './types';
import cls from './select.module.scss';

// tslint:disable-next-line: no-any
export const getOptionLabel = (option?: SelectOption<any> | null) => {
  if (option) {
    return option.label || option.value;
  }
  return null;
};

export const getDisplayValue = (
  // tslint:disable-next-line: no-any
  option?: SelectOption<any> | SelectOption<any>[] | null
) => {
  if (Array.isArray(option)) {
    if (option.length > 1) {
      return (
        <>
          {getOptionLabel(option[0])}{' '}
          <span className={cls['select-multi-count']}>
            +{option.length - 1}
          </span>
        </>
      );
    }
    return getOptionLabel(option[0]);
  }

  return getOptionLabel(option);
};
