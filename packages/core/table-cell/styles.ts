import { css } from '@emotion/core';
import reset from '../css-reset';

const tableCell = css`
  ${reset};
  flex-shrink: 1;
  flex-grow: 1;
  flex-basis: 1px;
  padding: 8px 4px;
  font-size: 14px;
  color: #27293B;
`;

export default tableCell;
