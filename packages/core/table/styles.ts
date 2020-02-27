import { css } from '@emotion/core';
import reset from '../css-reset';

const emptyTable = css`
  ${reset};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 48px;
  font-size: 14px;
  font-weight: 400;
  color: #646572;
  background-color: #EEEEEF;
  border-bottom: 1px solid #DCDDE0;
`;

export default emptyTable;
