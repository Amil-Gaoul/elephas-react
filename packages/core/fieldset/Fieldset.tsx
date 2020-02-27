/** @jsx jsx */
import { jsx } from '@emotion/core';
import { forwardRef, Ref } from 'react';

import { FieldsetProps } from './types';
import {
  fieldset,
  fieldsetError,
  fieldsetLegend,
  fieldsetHint,
} from './styles';

export const Fieldset = forwardRef<HTMLFieldSetElement, FieldsetProps>(
  (props: FieldsetProps, ref: Ref<HTMLFieldSetElement>) => {
    const {
      children,
      className,
      error,
      hint,
      legend,
      name,
      form,
      disabled,
    } = props;

    return (
      <fieldset
        name={name}
        form={form}
        disabled={disabled}
        css={fieldset}
        className={className}
        ref={ref}
      >
        { legend && <legend css={fieldsetLegend}>{ legend }</legend> }
        { children }
        { error && <span css={fieldsetError}>{ error }</span> }
        {
          hint
          && !error
          && <span css={fieldsetHint}>{ hint }</span>
        }
      </fieldset>
    );
  },
);
