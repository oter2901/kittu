import * as React from 'react';
import classnames from 'classnames';
//@ts-ignore
import cls from './baseInput.scss';
import { CheckboxIcon } from './components/Check';

export type BaseInputProps = JSX.IntrinsicElements['input'] & {
  label?: React.ReactNode;
  description?: React.ReactNode;
};

export const BaseInput = ({
  label,
  className,
  description,
  toggle,
  name,
  type,
  ...rest
}: BaseInputProps & {
  toggle?: boolean;
}) => {
  const isRadio = type === 'radio';
  return (
    <label
      className={classnames(cls['form-check'], 'form-group', className, {
        [cls.toggle]: toggle,
        [cls.radio]: isRadio,
      })}
    >
      <input
        className={cls['form-check-input']}
        name={name}
        type={isRadio ? 'radio' : 'checkbox'}
        {...rest}
      />
      <span className={cls['form-check-label']}>
        {!toggle && !isRadio && <CheckboxIcon />}
        {label}
      </span>
      {description && (
        <p className={cls['form-check-description']}>{description}</p>
      )}
    </label>
  );
};

BaseInput.displayName = 'BaseInput';

export default BaseInput;
