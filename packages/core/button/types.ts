import { ReactNode, MouseEventHandler } from 'react';

export interface ButtonProps {
  /**
   * Visual appearance.
   * @default default
   */
  appearance?: 'default' | 'danger' | 'primary';
  disabled?: boolean;

  /**
   * Nodes to render inside button.
   */
  children: ReactNode;

  className?: string;

  /**
   * Button size.
   * @default default
   */
  size?: 'default' | 'small';
  type?: 'submit' | 'reset' | 'button';

  onClick?: MouseEventHandler<HTMLButtonElement>
}
