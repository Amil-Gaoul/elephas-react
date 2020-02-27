/** @jsx jsx */
import { jsx } from '@emotion/core';

import { TableHeadCellProps } from './types';
import tableHeadCell from './styles';

function TableHeadCell(props: TableHeadCellProps) {
  const {
    children,
  } = props;

  return (
    <div css={tableHeadCell} className="tableHeadCell" role="columnheader">
      { children }
    </div>
  );
}

export default TableHeadCell;
