import { FieldsetHTMLAttributes, ReactNode } from 'react';

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset
export interface FieldsetProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  children: ReactNode;
  className?: string;
  error?: string;
  hint?: string;
  legend?: string;
}
