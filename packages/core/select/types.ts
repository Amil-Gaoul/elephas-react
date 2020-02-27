import { AbstractInput } from '../base-input/types';

type Option = {
  title: string;
  value: string;
};

export interface SelectProps extends AbstractInput {
  options: Option[];
}
