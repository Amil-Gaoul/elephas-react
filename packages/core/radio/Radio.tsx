/** @jsx jsx */
import { forwardRef, Ref } from 'react';
import { jsx } from '@emotion/core';

import { RadioProps } from './types';
import {
  root,
  rootDisabled,
  customInput,
  radioLabel,
} from './styles';

export const Radio = forwardRef<HTMLInputElement, RadioProps>((props: RadioProps, ref: Ref<HTMLInputElement>) => {
  const {
    id,
    value = '',
    name = '',
    label = '',
    disabled = false,
    checked = false,
    readonly = false,
    onChange,
    className,
  } = props;

  return (
    <label
      htmlFor={id}
      className={className}
      css={[
        root,
        (disabled || readonly) && rootDisabled,
      ]}
    >
      <input
        id={id}
        ref={ref}
        type="radio"
        css={customInput}
        name={name}
        value={value}
        defaultChecked={checked}
        disabled={disabled}
        readOnly={readonly}
        onChange={onChange}
      />
      <span className="elphs__radioIcon" />
      <span css={radioLabel} className="elphs__radioLabel">
        {label}
      </span>
    </label>
  );
});
