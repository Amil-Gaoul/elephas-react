import { ReactNode } from 'react';

export interface BannerProps {
  appearance: 'danger' | 'warning';
  children: ReactNode;
  className?: string;
}
