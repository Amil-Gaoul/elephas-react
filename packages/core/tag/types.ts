import { ReactNode } from 'react';

export interface TagProps {
  /**
   * Visual appearance of a tag.
   * @default default
   */
  appearance?: 'default' | 'danger' | 'success' | 'warning';
  /**
   * Contents of the tag.
   */
  children: ReactNode;
  className?: string;
}
