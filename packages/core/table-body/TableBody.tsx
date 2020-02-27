import React from 'react';

import { TableBodyProps } from './types';

function TableBody(props: TableBodyProps) {
  const {
    children,
  } = props;

  return (
    <div className="tableBody" role="rowgroup">
      { children }
    </div>
  );
}

export default TableBody;
