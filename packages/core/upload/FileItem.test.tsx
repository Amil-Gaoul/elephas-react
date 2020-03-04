import React, { MouseEvent, KeyboardEvent } from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import FileItem from './FileItem';

describe('<FileItem />', () => {
  let singleFileMaxSizeError: string;
  let maxSize: number;
  let onDelete: (event: MouseEvent<HTMLDivElement> | KeyboardEvent<HTMLDivElement>, name: string) => void;

  beforeEach(() => {
    singleFileMaxSizeError = 'Превышен максимально допустимый размер файла';
    maxSize = 150;
    onDelete = jest.fn();
  });

  afterEach(cleanup);

  it('should display an error about file max size exceeding', () => {
    const { getByText } = render(
      <FileItem
        maxSize={maxSize}
        maxSizeError={singleFileMaxSizeError}
        onDelete={onDelete}
        name="Файл1"
        size={1048600}
        appearance="default"
        error
      />,
    );

    expect(getByText(singleFileMaxSizeError)).toBeInTheDocument();
  });

  it('should call delete callback', () => {
    const { getByTestId } = render(
      <FileItem
        maxSize={maxSize}
        maxSizeError={singleFileMaxSizeError}
        onDelete={onDelete}
        name="Файл1"
        size={1048600}
        appearance="default"
        error
      />,
    );

    fireEvent.click(getByTestId('delete'));

    expect(onDelete).toHaveBeenCalledTimes(1);
  });
});
