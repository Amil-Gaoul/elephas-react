import { ReactNode } from 'react';

export interface TooltipProps {
  children: ReactNode;
  className?: string;
  position: 'top' | 'right' | 'bottom' | 'left';
  text: string;
}
