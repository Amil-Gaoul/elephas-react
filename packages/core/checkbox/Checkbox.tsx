/* eslint-disable jsx-a11y/label-has-associated-control */

/** @jsx jsx */
import { forwardRef, Ref } from 'react';
import { jsx } from '@emotion/core';

import { CheckboxProps } from './types';
import {
  root,
  rootDisabled,
  customInput,
  checkboxLabel,
} from './styles';

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (props: CheckboxProps, ref: Ref<HTMLInputElement>) => {
    const {
      className,
      id,
      value = '',
      name = '',
      label,
      checked = false,
      disabled = false,
      readonly = false,
      onChange,
    } = props;

    return (
      <label
        className={className}
        htmlFor={id}
        css={[
          root,
          (disabled || readonly) && rootDisabled,
        ]}
      >
        <input
          id={id}
          ref={ref}
          css={customInput}
          type="checkbox"
          name={name}
          value={value}
          defaultChecked={checked}
          disabled={disabled}
          aria-readonly={readonly}
          onChange={onChange}
        />
        <span className="elphs__checkboxIcon" />
        <span css={checkboxLabel} className="elphs__checkboxLabel">
          {label}
        </span>
      </label>
    );
  },
);
