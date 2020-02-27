/** @jsx jsx */
import { css, jsx, SerializedStyles } from '@emotion/core';

import TableHead from '../table-head';
import TableBody from '../table-body';
import TableFoot from '../table-foot';
import TableRow from '../table-row';
import TableHeadCell from '../table-head-cell';
import TableCell from '../table-cell';

import emptyTable from './styles';
import { TableProps } from './types';

function Table(props: TableProps) {
  const {
    columnWidths,
    data,
    emptyMessage,
    foot,
    head,
  } = props;

  let stylesArray: SerializedStyles[] = [];

  if (columnWidths) {
    for (let i = 0; i < columnWidths.length; i += 1) {
      const columnStyles = css`
        .tableHeadCell:nth-child(${i + 1}) {
          flex-grow: ${columnWidths[i]};
        }

        .tableCell:nth-child(${i + 1}) {
          flex-grow: ${columnWidths[i]};
        }
      `;
      stylesArray = [columnStyles, ...stylesArray];
    }
  }

  return (
    <div css={stylesArray} className="table" role="grid">
      <TableHead>
        <TableRow>
          { head.map((headCell) => (<TableHeadCell>{ headCell }</TableHeadCell>)) }
        </TableRow>
      </TableHead>
      <TableBody>
        {
          data
            ? data.map((tableRow) => (
              <TableRow>
                { tableRow.map((tableCell) => (<TableCell>{ tableCell }</TableCell>)) }
              </TableRow>
            ))
            : <div css={emptyTable}>{ emptyMessage }</div>
        }
      </TableBody>
      { foot && (
        <TableFoot>
          <TableRow>
            { foot.map((footCell) => (<TableCell>{ footCell }</TableCell>)) }
          </TableRow>
        </TableFoot>
      ) }
    </div>
  );
}

export default Table;
