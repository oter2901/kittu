import React from 'react';
import classnames from 'classnames';
import {
  Dropdown,
  DropdownItem,
  DropdownMenuPosition,
} from '@kittu/ui-kit.components.dropdown';
import { TextField } from '@kittu/ui-kit.components.text-field';
import { ContentTitle } from '@kittu/ui-kit.components.content-title';
import { FormGroup } from '@kittu/ui-kit.components.form-group';

import {
  SelectOption,
  SelectOnOptionFn,
  SelectActiveOption,
  SelectOptionProps,
} from './types';
import { getDisplayValue } from './utils';
import { SelectButton } from './components/SelectButton';
import cls from './select.module.scss';
export * from './types';

export type SelectMenuPosition = DropdownMenuPosition;

export type SelectProps<
  V extends number | string,
  M extends boolean = false
  //FIXME: THIS TYPE EXPORT SHOULD BE JUST DROPDOWN
> = React.ComponentProps<typeof Dropdown> & {
  placeholder?: React.ReactNode;
  onOptionClick?: SelectOnOptionFn<V>;
  name?: string;
  inputSearchProps?: React.ComponentProps<typeof TextField>;
  searchable?: boolean;
  label?: React.ReactNode;
  noWrap?: boolean;
} & SelectOptionProps<V, M>;

export const Select = <V extends number | string, M extends boolean = false>(
  props: SelectProps<V, M>
) => {
  const {
    options,
    activeOption: activeOptionProp,
    defaultOption,
    placeholder = 'Select Option',
    onOptionClick,
    name,
    inputSearchProps = {},
    searchable = false,
    buttonProps,
    multiple,
    className,
    label,
    noWrap,
    ...rest
  } = props;

  const [innerActiveOption, setInnerActiveOption] =
    React.useState(defaultOption);

  const getActiveOption = () => {
    if (activeOptionProp || activeOptionProp === null) {
      return activeOptionProp;
    }

    return innerActiveOption;
  };

  const activeOption = getActiveOption();
  const setOption: SelectOnOptionFn<V> = (...params) => {
    if (onOptionClick) {
      onOptionClick(...params);
    }
    const [option] = params;
    if (multiple === true) {
      if (Array.isArray(innerActiveOption)) {
        const isSelected =
          innerActiveOption.findIndex((item) => item.value === option.value) >
          -1;
        if (isSelected) {
          // filtering out
          const filtered = innerActiveOption.filter(
            (item: SelectOption<V>) => item.value === option.value
          ) as SelectActiveOption<V, M>;
          setInnerActiveOption(filtered);
        } else {
          // adding to selected options
          setInnerActiveOption([
            ...innerActiveOption,
            option,
          ] as SelectActiveOption<V, M>);
        }
      } else {
        setInnerActiveOption([option] as SelectActiveOption<V, M>);
      }
    } else {
      setInnerActiveOption(option as SelectActiveOption<V, M>);
    }
  };

  const el = (
    <>
      {label && <ContentTitle>{label}</ContentTitle>}
      <Dropdown
        className={classnames(cls['select'], className)}
        ButtonComponent={SelectButton}
        buttonProps={{
          ...buttonProps,
          options,
          activeOption,
          placeholder,
        }}
        {...rest}
      >
        {({ handleClose, isOpen }) => {
          const handleOptionClick = (option: SelectOption<V>) => () => {
            setOption(option, name);
            if (!multiple) {
              handleClose();
            }
          };

          return (
            <>
              {searchable && (
                <div className={cls['select-search-box']}>
                  <TextField
                    {...inputSearchProps}
                    autoFocus
                    className={classnames(
                      cls['select-search-input'],
                      inputSearchProps.className
                    )}
                    rightEl={
                      <div className={cls['select-search-wrapper']}>
                        <div className={cls['select-search']}>
                          <div className={cls['select-search-circle']} />
                          <div className={cls['select-search-rectangle']} />
                        </div>
                      </div>
                    }
                  />
                </div>
              )}
              {options.map((option) => (
                <DropdownItem
                  onClick={handleOptionClick(option)}
                  key={option.value}
                  {...option.props}
                >
                  {getDisplayValue(option)}
                  {multiple &&
                    Array.isArray(activeOption) &&
                    activeOption.find(
                      (item) => item.value === option.value
                    ) && (
                      <span className={cls['select-option-selected-mark']} />
                    )}
                </DropdownItem>
              ))}
            </>
          );
        }}
      </Dropdown>
    </>
  );

  return label && !noWrap ? <FormGroup>{el}</FormGroup> : el;
};
