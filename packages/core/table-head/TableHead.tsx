/** @jsx jsx */
import { jsx } from '@emotion/core';

import { TableHeadProps } from './types';
import tableHead from './styles';

function TableHead(props: TableHeadProps) {
  const {
    children,
  } = props;

  return (
    <div css={tableHead} className="tableHead" role="rowgroup">
      { children }
    </div>
  );
}

export default TableHead;
