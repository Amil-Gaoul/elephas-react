/** @jsx jsx */
import { jsx } from '@emotion/core';

import { BadgeProps } from './types';
import {
  badgeWrapper,
  badgeBase,
  badgePositions,
} from './styles';

function Badge(props: BadgeProps) {
  const {
    content = '',
    children,
    className,
    position = 'static',
  } = props;

  return (
    <div
      className={className}
      css={[
        badgeWrapper,
      ]}
    >
      <div
        css={[
          badgeBase,
          badgePositions[position],
        ]}
      >
        { content }
      </div>
      { children && children }
    </div>
  );
}

export default Badge;
