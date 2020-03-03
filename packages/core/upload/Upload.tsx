/** @jsx jsx */
import { jsx } from '@emotion/core';

import {
  createRef, useState, MouseEvent, DragEvent, ChangeEvent, KeyboardEvent, useEffect,
} from 'react';

import { UploadProps } from './types';
import FileItem from './FileItem';

import {
  input,
  error as errorCss,
  upload,
  uploadAppearances,
  uploadHighlighted,
} from './styles';

function Upload(props: UploadProps) {
  const {
    appearance = 'default',
    className,
    label,
    multiple = false,
    accept,
    name,
    id,
    error = '',
    singleFileMaxSize,
    singleFileMaxSizeError,
    files,
    onChange,
  } = props;

  const inputRef = createRef<HTMLInputElement>();

  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [highlight, setHighlight] = useState(false);

  function addUploadedFiles(filesToAdd: File[]) {
    setUploadedFiles((prevUploadedFiles: File[]) => (multiple ? prevUploadedFiles.concat(filesToAdd) : filesToAdd));
  }

  useEffect(() => {
    if (!files) {
      return;
    }

    addUploadedFiles(Array.isArray(files) ? files : [files]);
  }, [files]);

  function isFileExceededMaxSize(size: number) {
    if (!singleFileMaxSize) {
      return false;
    }

    return size > singleFileMaxSize;
  }

  useEffect(() => {
    const validFiles = uploadedFiles.filter(({ size }) => !isFileExceededMaxSize(size));
    if (!validFiles.length) {
      return;
    }

    onChange(validFiles);
  }, [uploadedFiles]);

  function onUploadFile(event: ChangeEvent<HTMLInputElement>) {
    const { files: filesToUpload } = event.target;

    if (!filesToUpload) {
      return;
    }

    addUploadedFiles([...filesToUpload]);
  }

  function isUploadActionDisabled() {
    return appearance === 'disabled' || appearance === 'readonly';
  }

  function isUserActionValid(event: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>) {
    return event.type === 'click' || (event as KeyboardEvent).keyCode === 13;
  }

  function onOpenFileDialog(event: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>) {
    if (isUploadActionDisabled() || !isUserActionValid(event)) {
      return;
    }

    inputRef.current!.click();
  }

  function onDeleteFile(event: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>, fileName: string) {
    if (isUploadActionDisabled() || !isUserActionValid(event)) {
      return;
    }

    const filteredFiles = uploadedFiles.filter((uploadedFile) => uploadedFile.name !== fileName);

    setUploadedFiles(filteredFiles);
  }

  function onDragOver(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();

    if (isUploadActionDisabled()) {
      return;
    }

    setHighlight(true);
  }

  function onDragLeave() {
    setHighlight(false);
  }

  function onDrop(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();

    if (isUploadActionDisabled()) {
      return;
    }

    const draggedFiles = multiple ? [...event.dataTransfer.files] : [event.dataTransfer.files[0]];

    addUploadedFiles(draggedFiles);
    setHighlight(false);
  }

  return (
    <div className={className}>
      <div
        css={[upload, uploadAppearances[appearance], highlight && uploadHighlighted]}
        role="button"
        tabIndex={0}
        onClick={onOpenFileDialog}
        onKeyUp={onOpenFileDialog}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <input
          data-testid="input"
          css={input}
          type="file"
          accept={accept}
          name={name}
          id={id}
          ref={inputRef}
          multiple={multiple}
          onChange={onUploadFile}
        />
        { appearance !== 'readonly' && label }
      </div>
      {
        error
        && appearance === 'error'
        && <div css={errorCss}>{ error }</div>
      }
      {
        uploadedFiles.map(({ name: fileName, size }) => (
          <FileItem
            key={name}
            name={fileName}
            appearance={appearance}
            onDelete={onDeleteFile}
            error={isFileExceededMaxSize(size)}
            maxSize={singleFileMaxSize}
            maxSizeError={singleFileMaxSizeError}
            size={size}
          />
        ))
      }
    </div>
  );
}

export default Upload;
