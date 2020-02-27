import { ReactNode } from 'react';

export interface TableProps {
  /**
   * Set column width ratios.
   * @default [1, 1, 1...]
   */
  columnWidths?: Array<number>;
  data?: Array<Array<ReactNode>>;
  emptyMessage?: string;
  foot?: Array<ReactNode>;
  head: Array<ReactNode>;
}
