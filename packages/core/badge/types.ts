import { ReactNode } from 'react';

export interface BadgeProps {
  /** The badge will be added relative to this node. */
  children?: ReactNode;
  className?: string;
  /** Text displayed inside the badge. */
  content?: string;
  /**
   * Static position for standalone badge; others relative to a wrapped object.
   * @default static
   */
  position?: 'static' | 'onSquare' | 'onCircle';
}
