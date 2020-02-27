/** @jsx jsx */
import { jsx } from '@emotion/core';
import { forwardRef, Ref } from 'react';

import BaseInput from '../base-input';
import { TextareaProps } from './types';

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props: TextareaProps, ref:Ref<HTMLTextAreaElement>) => {
    const {
      rows = 3,
      ...rest
    } = props;

    return (
      <BaseInput {...rest}>
        <textarea rows={rows} ref={ref} />
      </BaseInput>
    );
  },
);
