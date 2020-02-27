import { css } from '@emotion/core';
import reset from '../css-reset';

export const list = css`
  ${reset};
  display: block;
`;

export const listItem = css`
  ${reset};
  display: inline-block;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: #2962FF;
  
  &::after {
    content: '/';
    display: inline-block;
    margin: 0 8px;
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    color: #BABBC0;
  }
`;
