import { ChangeEventHandler, ReactNode } from 'react';

export interface CheckboxProps {
  children?: ReactNode;
  className?: string;
  label?: string;
  value?: string;
  id?: string;
  name?: string;
  readonly?: boolean;
  disabled?: boolean;
  checked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>
}
