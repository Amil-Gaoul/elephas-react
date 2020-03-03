import { MouseEvent, KeyboardEvent } from 'react';

export interface FileItemProps {
  name: string,
  appearance: 'error' | 'default' | 'disabled' | 'readonly',
  onDelete: (event: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>, name: string) => void,
  error: boolean;
  size: number;
  maxSize: number | undefined;
  maxSizeError: string | undefined;
}

export interface UploadProps {
  className?: string;
  label: string;
  multiple?: boolean;
  accept?: string;
  name?: string;
  id?: string;
  appearance?: 'error' | 'default' | 'disabled' | 'readonly';
  error?: string;
  /**
   * Limit for size of each file in bytes.
   */
  singleFileMaxSize?: number;
  singleFileMaxSizeError?: string;
  files?: File | File[];
  onChange: (files: File[]) => void;
}
