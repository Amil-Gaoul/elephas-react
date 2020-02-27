/** @jsx jsx */
import { jsx } from '@emotion/core';

import { TableCellProps } from './types';
import tableCell from './styles';

function TableCell(props: TableCellProps) {
  const {
    children,
  } = props;

  return (
    <div css={tableCell} className="tableCell" role="gridcell">
      { children }
    </div>
  );
}

export default TableCell;
