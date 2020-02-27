/** @jsx jsx */
import { jsx } from '@emotion/core';

import { BannerProps } from './types';

import {
  bannerAppearances,
  bannerBase,
} from './styles';

function Banner(props: BannerProps) {
  const {
    appearance,
    children,
    className,
  } = props;

  return (
    <div
      className={className}
      css={[
        bannerBase,
        bannerAppearances[appearance],
      ]}
    >
      {children}
    </div>
  );
}

export default Banner;
