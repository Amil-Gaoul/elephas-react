import { ReactNode } from 'react';

export interface TabsProps {
  children: ReactNode;
}

export interface TabProps {
  active?: boolean;
  children: ReactNode;
}
