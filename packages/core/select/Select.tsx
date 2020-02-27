/** @jsx jsx */
import { jsx } from '@emotion/core';
import { forwardRef, Ref } from 'react';
import BaseInput from '../base-input';

import { SelectProps } from './types';

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (props: SelectProps, ref: Ref<HTMLSelectElement>) => {
    const {
      options,
      ...rest
    } = props;

    return (
      <BaseInput {...rest}>
        <select ref={ref}>
          { options.map((option) => (
            <option
              value={option.value}
              key={option.value}
            >
              { option.title }
            </option>
          )) }
        </select>
      </BaseInput>
    );
  },
);
