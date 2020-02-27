import { css } from '@emotion/core';
import reset from '../css-reset';

const tableHeadCell = css`
  ${reset};
  flex-shrink: 1;
  flex-grow: 1;
  flex-basis: 1px;
  padding: 4px 4px;
  color: #646572;
  font-size: 12px;
`;

export default tableHeadCell;
