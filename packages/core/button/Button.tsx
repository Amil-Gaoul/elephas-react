/** @jsx jsx */
import { jsx } from '@emotion/core';

import { ButtonProps } from './types';

import {
  buttonAppearances,
  buttonBase,
  buttonDisabled,
  buttonSizes,
} from './styles';

function Button(props: ButtonProps) {
  const {
    appearance = 'default',
    children,
    className,
    disabled = false,
    onClick,
    size = 'default',
    type = 'button',
  } = props;

  return (
    // https://github.com/yannickcr/eslint-plugin-react/issues/1555
    // eslint-disable-next-line react/button-has-type
    <button
      className={className}
      css={[
        buttonBase,
        buttonAppearances[appearance],
        buttonSizes[size],
        disabled && buttonDisabled,
      ]}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      { children }
    </button>
  );
}

export default Button;
