import React from 'react';
import Upload from '.';

function UploadReadonlyExample() {
  const file = new File(['foo'], 'foo.txt', {
    type: 'text/plain',
  });

  return (
    <Upload
      label="Выберите файлы или перетащите его сюда"
      className="upload"
      onChange={(files) => console.log(files)}
      appearance="readonly"
      files={file}
    />
  );
}

export default UploadReadonlyExample;
