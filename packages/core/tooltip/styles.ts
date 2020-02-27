import { css } from '@emotion/core';
import reset from '../css-reset';

export const tooltipWrapper = css`
  position: relative;
  display: inline-block;
`;

export const tooltipBase = css`
  ${reset};
  position: absolute;
  display: none;
  width: 320px;

  *:hover > & {
    display: block;
  }

  &::before {
    content: '';
    position: absolute;
    display: block;
    width: 0;
    height: 0;
  }
`;

export const tooltipText = css`
  ${reset};
  display: inline-block;
  max-width:300px;
  padding: 8px 12px;
  border-radius: 4px;
  background-color: #27293B;
  color: #FFFFFF;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  text-align: left;
`;

export const tooltipPositions = {
  top: css`
    top: -8px;
    left: 50%;
    transform: translate(-50%, -100%);
    text-align: center;
    &::before {
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-top: 6px solid rgba(0, 0, 0, 0.8);
    }
  `,
  right: css`
    right: -12px;
    top: 50%;
    transform: translate(100%, -50%);
    text-align: left;
    &::before {
      right: 100%;
      top: 50%;
      transform: translateY(-50%);
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-right: 6px solid rgba(0, 0, 0, 0.8);
    }
  `,
  bottom: css`
    bottom: -12px;
    left: 50%;
    transform: translate(-50%, 100%);
    text-align: center;
    &::before {
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%);
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-bottom: 6px solid rgba(0, 0, 0, 0.8);
    }
  `,
  left: css`
    left: -12px;
    top: 50%;
    transform: translate(-100%, -50%);
    text-align: right;
    &::before {
      left: 100%;
      top: 50%;
      transform: translateY(-50%);
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-left: 6px solid rgba(0, 0, 0, 0.8);
    }
  `,
};
