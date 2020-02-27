/** @jsx jsx */
import { jsx } from '@emotion/core';

import { TableRowProps } from './types';
import tableRow from './styles';

function TableRow(props: TableRowProps) {
  const {
    children,
  } = props;

  return (
    <div css={tableRow} className="tableRow" role="row">
      { children }
    </div>
  );
}

export default TableRow;
