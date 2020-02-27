import { css } from '@emotion/core';

export const buttonBase = css`
  box-sizing: border-box;
  width: auto;
  max-width: 100%;
  outline: none;
  border: none;
  border-radius: 4px;
  margin: 0;
  padding: 0;
  overflow: visible;
  background: none;
  color: inherit;
  font: inherit;
  font-weight: 500;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  -webkit-appearance: none;

  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
`;

export const buttonAppearances = {
  default: css`
    background-color: #EEEEEF;
    color: #2962FF;

    &:hover {
      background-color: #DCDDE0;
    }
  `,
  danger: css`
    background-color: #E5243C;
    color: #FFFFFF;

    &:hover {
      background-color: #C8243C;
    }
  `,
  primary: css`
    background-color: #2962FF;
    color: #FFFFFF;
    
    &:hover {
      background-color: #2959E0;
    }
  `,
};

export const buttonDisabled = css`
  opacity: 0.32;
  pointer-events: none;
  cursor: default;
`;

export const buttonSizes = {
  default: css`
    height: 40px;
    padding-left: 16px;
    padding-right: 16px;
    font-size: 14px;
    line-height: 36px;
  `,
  small: css`
    height: 24px;
    padding-left: 8px;
    padding-right: 8px;
    font-size: 12px;
    line-height: 24px;
  `,
};
