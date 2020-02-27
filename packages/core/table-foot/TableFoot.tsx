/** @jsx jsx */
import { jsx } from '@emotion/core';

import { TableFootProps } from './types';
import tableFoot from './styles';

function TableFoot(props: TableFootProps) {
  const {
    children,
  } = props;

  return (
    <div css={tableFoot} className="tableFoot" role="rowgroup">
      { children }
    </div>
  );
}

export default TableFoot;
