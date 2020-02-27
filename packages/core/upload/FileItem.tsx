/** @jsx jsx */
import { jsx } from '@emotion/core';
import { MouseEvent, KeyboardEvent } from 'react';

import { CloseIcon, ErrorIcon } from './icons';

import { FileItemProps } from './types';
import {
  fileItem,
  fileName,
  fileExtension as fileNameExtensionCss,
  fileError,
  fileItemError,
  fileSize,
  fileItemWrapper,
  deleteIcon,
  errorIcon,
} from './styles';


function formatBytes(bytes: number) {
  if (bytes < 1024) {
    return `${bytes} B`;
  }
  if (bytes < 1048576) {
    return `${(bytes / 1024).toFixed(2)} KB`;
  }
  return `${(bytes / 1048576).toFixed(2)} MB`;
}

export function getErrorMessage(maxSizeError: string, maxSize: number) {
  return `${maxSizeError} ${formatBytes(maxSize)}`;
}

const FileItem = (props: FileItemProps) => {
  const {
    name,
    appearance,
    onDelete,
    error,
    maxSize,
    maxSizeError,
    size,
  } = props;

  function onDeleteFile(event: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>) {
    onDelete(event, name);
  }

  const extRe = /(?:\.([^.]+))?$/;
  const fileExtensionMatch = extRe.exec(name) || [''];
  const fileExtension = fileExtensionMatch[0];
  const fileNameWithoutExtension = fileExtension ? name.slice(0, -fileExtension.length) : name;

  return (
    <div data-testid="fileItem" css={fileItemWrapper}>
      <div
        css={[fileItem, error && fileItemError]}
        key={name}
      >
        <div>
          { error && <span css={errorIcon}><ErrorIcon /></span> }
          <span css={fileName}>{ fileNameWithoutExtension }</span>
          <span css={fileNameExtensionCss}>{ fileExtension }</span>
          <span css={fileSize}>{ formatBytes(size) }</span>
        </div>
        <div
          data-testid="delete"
          css={deleteIcon}
          role="button"
          tabIndex={0}
          onKeyUp={onDeleteFile}
          onClick={onDeleteFile}
        >
          { appearance !== 'readonly' && <CloseIcon /> }
        </div>
      </div>
      {
        error
        && maxSize
        && <span css={fileError}>{ maxSizeError && getErrorMessage(maxSizeError, maxSize) }</span>
      }
    </div>
  );
};

export default FileItem;
