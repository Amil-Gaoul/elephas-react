/** @jsx jsx */
import { jsx } from '@emotion/core';
import {
  ChangeEvent,
  FocusEvent,
  useState,
} from 'react';

import { customCloneElement } from '../utils/customCloneElement';
import { BaseInputProps, HTMLAttributesComposite } from './types';
import {
  error as errorCss,
  hint as hintCss,
  control as controlCss,
  inputAppearances,
  label as labelCss,
  field,
  fieldAppearances,
  fieldSizes,
  wrapper,
  labelExpand,
  disabledHint,
  disabledLabel,
  fieldArrow,
} from './styles';

function isFilled(obj: any): boolean {
  return obj && (obj.value !== null && obj.value !== '');
}

function BaseInput(props: BaseInputProps) {
  const {
    appearance = 'default',
    className,
    error,
    hint,
    label,
    width = '100%',
    onBlur,
    onChange,
    onFocus,
    value,
    children,
    ...rest
  } = props;

  const [focused, setFocused] = useState(false);
  const [filled, setFilled] = useState(isFilled(value));

  const controlType = children?.type.toString() || 'input';

  const handleBlur = (event: FocusEvent<HTMLAttributesComposite>) => {
    if (onBlur) {
      onBlur(event);
    }

    setFocused(false);
  };

  const handleFocus = (event: FocusEvent<HTMLAttributesComposite>) => {
    if (onFocus) {
      onFocus(event);
    }

    setFocused(true);
  };

  const handleChange = (event: ChangeEvent<HTMLAttributesComposite>) => {
    setFilled(isFilled(event.target));

    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div className={className} css={wrapper}>
      {/* Should pass a11y lint according to https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md */}
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label css={[
        field,
        fieldAppearances[appearance],
        fieldSizes[width],
        controlType === 'select' && fieldArrow,
      ]}
      >
        <span css={[
          labelCss,
          !focused && !filled && labelExpand,
          appearance === 'disabled' && disabledLabel,
        ]}
        >
          { label }
        </span>
        {
          customCloneElement(children, {
            css: [
              controlCss[controlType],
              inputAppearances[appearance],
            ],
            value,
            disabled: appearance === 'disabled',
            readOnly: appearance === 'readonly',
            onChange: handleChange,
            onFocus: handleFocus,
            onBlur: handleBlur,
            ...rest,
          })
        }
        <span />
      </label>
      {
        hint
        && appearance !== 'error'
        && <span css={[hintCss, appearance === 'disabled' && disabledHint]}>{ hint }</span>
      }
      {
        error
        && appearance === 'error'
        && <span css={errorCss}>{ error }</span>
      }
    </div>
  );
}
export default BaseInput;
