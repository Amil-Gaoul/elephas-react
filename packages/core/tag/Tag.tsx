/** @jsx jsx */
import { jsx } from '@emotion/core';

import { TagProps } from './types';
import { tagBase, tagAppearances } from './styles';

function Tag(props: TagProps) {
  const {
    appearance = 'default',
    children,
    className,
  } = props;

  return (
    <div
      css={[
        tagBase,
        tagAppearances[appearance],
      ]}
      className={className}
    >
      { children }
    </div>
  );
}

export default Tag;
