import { DatepickerValue } from '@kittu/ui.components.datepicker';

export type SelectDateRenderValue<M extends boolean> = (
  value?: DatepickerValue<M>,
  isRange?: M,
  placeholder?: React.ReactNode
) => React.ReactNode;
