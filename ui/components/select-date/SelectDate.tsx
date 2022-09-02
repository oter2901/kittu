import React from 'react';
import classnames from 'classnames';
import {
  Datepicker,
  DatepickerProps,
  DatepickerValue,
  DatepickerRangeValue,
  useDatepickerValue,
} from '@kittu/ui.components.datepicker';
import { Dropdown } from '@kittu/ui.components.dropdown';
import { ContentTitle } from '@kittu/ui.components.content-title';
import { useOpenState } from '@kittu/ui.hooks.use-open-state';
import { FormGroup } from '@kittu/ui.components.form-group';

import cls from './selectDate.module.scss';

import { defaultRenderValue } from './defaultRenders';
import { SelectDateRenderValue } from './types';

export * from './types';

export type SelectDateProps<M extends boolean> = React.ComponentProps<
  typeof Dropdown
> &
  DatepickerProps<M> & {
    placeholder?: React.ReactNode;
    label?: React.ReactNode;
    renderValue?: SelectDateRenderValue<M>;
    noWrap?: boolean;
  };

export const SelectDate = <M extends boolean = false>(
  props: SelectDateProps<M>
) => {
  const openControls = useOpenState();

  const {
    // Datepicker Props
    renderTitle,
    renderMonthName,
    renderWeekdayShort,
    isRange,
    value: valueProp,
    onDateChange: onDateChangeProp,
    minDate,
    maxDate,
    initialVisibleDate,
    weekdayOffset,
    // other
    placeholder = 'Select Date',
    label,
    renderValue = defaultRenderValue,
    noWrap,
    // rest is dropdown props
    ...dropdownProps
  } = props;

  const { setValue, value } = useDatepickerValue(
    valueProp,
    isRange,
    onDateChangeProp
  );

  const onDateChange = (value: DatepickerValue<M>) => {
    setValue(value);
    if (!isRange) {
      openControls.handleClose();
    } else {
      if (value && (value as DatepickerRangeValue).to) {
        openControls.handleClose();
      }
    }
  };

  const datepickerProps = {
    renderTitle,
    renderMonthName,
    renderWeekdayShort,
    isRange,
    value,
    onDateChange,
    minDate,
    maxDate,
    initialVisibleDate,
    weekdayOffset,
  };

  const { menuProps = {} } = dropdownProps;

  const menuMergedProps = {
    ...menuProps,
    className: classnames(
      cls['select-date-dropdown'],
      // tslint:disable-next-line: no-any
      (menuProps as any).className
    ),
    // tslint:disable-next-line: no-any
  } as any; // __TODO fix typing

  const el = (
    <>
      {label && <ContentTitle>{label}</ContentTitle>}
      <Dropdown
        className={cls['select-date']}
        openControls={openControls}
        buttonText={renderValue(value, isRange, placeholder)}
        menuProps={menuMergedProps}
        {...dropdownProps}
      >
        <Datepicker {...datepickerProps} />
      </Dropdown>
    </>
  );

  return label && !noWrap ? <FormGroup>{el}</FormGroup> : el;
};

SelectDate.displayName = 'SelectDate';
