import React from 'react';

import { MonthView } from './components/MonthView';
import { MonthListView } from './components/MonthListView';
import { YearListView } from './components/YearListView';
import { DatepickerView, useDatepickerView } from './hooks/useDatepickerView';
import {
  defaultRenderTitle,
  defaultRenderMonthName,
  defaultRenderWeekdayShort,
} from './defaultRenders';
import { useVisibleDate } from './hooks/useVisibleDate';
import cls from './datepicker.module.scss';

import {
  DatepickerRangeValue,
  DatepickerSimpleValue,
  DatepickerValue,
  DatepickerOnChange,
} from './types';

import { useDatepickerValue } from './hooks/useDatepickerValue';

export type DatepickerProps<M extends boolean = false> = {
  renderTitle?: (
    visibleDate: Date,
    activeView: DatepickerView
  ) => React.ReactNode;
  renderMonthName?: (monthNumber: number) => React.ReactNode;
  renderWeekdayShort?: (weekdayNumber: number) => React.ReactNode;
  isRange?: M;
  value?: DatepickerValue<M>;
  onDateChange?: DatepickerOnChange<M>;
  minDate?: Date;
  maxDate?: Date;
  initialVisibleDate?: Date;
  weekdayOffset?: number;
};

const getInitVisibleDate = <M extends boolean>(
  initDate?: Date,
  isRange?: M,
  value?: DatepickerValue<M> | null
) => {
  if (initDate) {
    return initDate;
  }

  if (isRange && !!value && !!(value as DatepickerRangeValue).from) {
    return (value as DatepickerRangeValue).from;
  }

  if (!isRange && !!value) {
    return value as Date;
  }

  return new Date();
};

export const Datepicker = <M extends boolean = false>(
  props: DatepickerProps<M>
) => {
  const view = useDatepickerView();
  const [mouseOverDate, setMouseOverDate] = React.useState<
    null | undefined | Date
  >(null);

  const {
    renderTitle = defaultRenderTitle,
    renderMonthName = defaultRenderMonthName,
    renderWeekdayShort = defaultRenderWeekdayShort,
    onDateChange: onChangeProp,
    value: controlledValue,
    isRange,
    minDate,
    maxDate,
    weekdayOffset,
    initialVisibleDate,
  } = props;

  const { value, setValue } = useDatepickerValue<M>(
    controlledValue,
    isRange,
    onChangeProp
  );

  const initVisibleDate = getInitVisibleDate(
    initialVisibleDate,
    isRange,
    value
  );

  const {
    handleMonthSelect,
    handleYearSelect,
    handleNext,
    handlePrev,
    visibleDate,
  } = useVisibleDate(initVisibleDate as Date, view);

  const handleDateSelect = React.useCallback(
    (date: Date) => {
      if (isRange === true) {
        const { from, to } = value as DatepickerRangeValue;
        const onChangeValue = setValue as DatepickerOnChange<true>;
        if (from && !to && from.getTime() <= date.getTime()) {
          onChangeValue({ from, to: date });
        } else {
          setMouseOverDate(null);
          onChangeValue({ from: date, to: null });
        }
      } else {
        const onChangeValue = setValue as DatepickerOnChange<false>;
        onChangeValue(date);
      }
    },
    [value]
  );

  const dateValue = !value
    ? (isRange && { from: null, to: null }) || null
    : value;

  const from = !isRange
    ? (dateValue as DatepickerSimpleValue)
    : (dateValue as DatepickerRangeValue).from;
  const to = !isRange
    ? (dateValue as DatepickerSimpleValue)
    : (dateValue as DatepickerRangeValue).to;

  const handleMouseOver =
    from && isRange && !to
      ? (date: Date) => {
          setMouseOverDate(date);
        }
      : undefined;

  const onMouseLeave =
    from && isRange && !to
      ? () => {
          setMouseOverDate(undefined);
        }
      : undefined;

  const dayProps = {
    handleDateSelect,
    minDate,
    maxDate,
    handleMouseOver,
    onMouseLeave,
    mouseOverDate,
    selectedDateFrom: from,
    selectedDateTo: to,
  };

  return (
    <div className={cls['datepicker']}>
      <div className={cls['datepicker-header']}>
        <button onClick={handlePrev} className={cls['datepicker-nav-btn']}>
          ←
        </button>
        <button
          className={cls['datepicker-title-btn']}
          type="button"
          onClick={view.setPrevView}
        >
          {renderTitle(visibleDate, view.activeView)}
        </button>
        <button onClick={handleNext} className={cls['datepicker-nav-btn']}>
          →
        </button>
      </div>

      <div className={cls['datepicker-view-container']}>
        {view.activeView === DatepickerView.yearList && (
          <YearListView
            handleYearSelect={handleYearSelect}
            visibleDate={visibleDate}
            minDate={minDate}
            maxDate={maxDate}
          />
        )}
        {view.activeView === DatepickerView.monthList && (
          <MonthListView
            handleMonthSelect={handleMonthSelect}
            visibleDate={visibleDate}
            renderMonthName={renderMonthName}
            minDate={minDate}
            maxDate={maxDate}
          />
        )}
        {view.activeView === DatepickerView.month && (
          <MonthView
            dayProps={dayProps}
            renderWeekdayShort={renderWeekdayShort}
            visibleDate={visibleDate}
            weekdayOffset={weekdayOffset}
          />
        )}
      </div>
    </div>
  );
};

Datepicker.displayName = 'Datepicker';
