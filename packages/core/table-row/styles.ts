import { css } from '@emotion/core';
import reset from '../css-reset';

const tableRow = css`
  ${reset};
  display: flex;

  .tableBody & {
    border-bottom: 1px solid #DCDDE0;

    &:hover {
      background-color: rgba(0, 0, 0, 0.03);
    }

    &:last-child {
      border-bottom: 2px solid #DCDDE0;
    }
  }
`;

export default tableRow;
