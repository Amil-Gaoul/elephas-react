/** @jsx jsx */
import { jsx } from '@emotion/core';
import { forwardRef, Ref } from 'react';

import BaseInput from '../base-input';
import { InputProps } from './types';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (props: InputProps, ref: Ref<HTMLInputElement>) => {
    const {
      type = 'text',
      ...rest
    } = props;

    return (
      <BaseInput {...rest}>
        <input
          type={type}
          ref={ref}
        />
      </BaseInput>
    );
  },
);
