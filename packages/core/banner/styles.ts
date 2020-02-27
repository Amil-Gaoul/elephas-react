import { css } from '@emotion/core';
import reset from '../css-reset';

export const bannerBase = css`
  ${reset};
  font-size: 14px;
  font-weight: 500;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const bannerAppearances = {
  danger: css`
    background-color: #E6243C;
    color: white;
  `,
  warning: css`
    background-color: #FF6F00;
    color: white;
  `,
};
