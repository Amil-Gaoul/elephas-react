import { ChangeEventHandler } from 'react';

export interface RadioProps {
  label?: string;
  readonly?: boolean;
  className?: string;
  id?: string;
  value?: string;
  name?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>
}
