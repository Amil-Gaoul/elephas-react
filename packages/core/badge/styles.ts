import { css } from '@emotion/core';
import reset from '../css-reset';

export const badgeWrapper = css`
  position: relative;
`;

export const badgeBase = css`
  ${reset};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 16px;
  min-width: 16px;
  padding: 0 4px;
  border-radius: 9001px;
  background-color: #E5243C;
  color: #FFFFFF;
  font-size: 11px;
  font-weight: 600;
  line-height: 16px;
  text-align: center;
`;

export const badgePositions = {
  static: css`
    position: static;
  `,
  onSquare: css`
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
  `,
  onCircle: css`
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(30%, -30%);
  `,
};
