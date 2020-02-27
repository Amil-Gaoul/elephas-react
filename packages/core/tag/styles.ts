import { css } from '@emotion/core';
import reset from '../css-reset';

export const tagBase = css`
  ${reset};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  padding-left: 6px;
  padding-right: 6px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 400;
`;

export const tagAppearances = {
  default: css`
    background-color: rgba(39, 41, 59, 0.16);
    color: #27293B;
  `,
  danger: css`
    background-color: rgba(229, 36, 60, 0.16);
    color: #27293B;
  `,
  success: css`
    background-color: rgba(37, 148, 70, 0.16);
    color: #27293B;
  `,
  warning: css`
    background-color: rgba(255, 111, 0, 0.16);
    color: #27293B;
  `,
};
