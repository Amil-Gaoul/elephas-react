import {
  ChangeEventHandler, FocusEventHandler, InputHTMLAttributes, ReactElement, TextareaHTMLAttributes,
} from 'react';

export type HTMLAttributesComposite = InputHTMLAttributes<HTMLInputElement> | TextareaHTMLAttributes<HTMLElement>;

export type AbstractInput = {
  value?: string | string[] | number;
  className?: string;
  /**
   * Hint message is *not* shown when appearance is set to `error`.
   */
  hint?: string;
  /**
   * Label is required for this version of input.
   */
  label: string;
  /**
   * @default 100%
   */
  width?: '2' | '4' | '6' | '8' | '12' | '100%';
  /**
   * @default default
   */
  appearance?: 'error' | 'default' | 'disabled' | 'readonly';
  /**
   * Error message must be present when appearance is set to `error`.
   */
  error?: string;

  onBlur?: FocusEventHandler<HTMLAttributesComposite>;

  onFocus?: FocusEventHandler<HTMLAttributesComposite>;

  onChange?: ChangeEventHandler<HTMLAttributesComposite>;
};

export interface BaseInputProps extends AbstractInput {
  children: ReactElement<HTMLAttributesComposite>;
}
