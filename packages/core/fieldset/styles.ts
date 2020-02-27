import { css } from '@emotion/core';
import reset from '../css-reset';

export const fieldset = css`
  ${reset};
  
  & > label:not(:last-of-type) {
    margin-bottom: 12px;
  }
`;

export const fieldsetLegend = css`
  ${reset};
  margin-bottom: 8px;
  color: #27293B;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
`;

export const fieldsetHint = css`
  ${reset};
  display: block;
  margin-top: 8px;
  color: #646572;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
`;

export const fieldsetError = css`
  ${reset};
  display: block;
  margin-top: 8px;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: #E5243C;
`;
