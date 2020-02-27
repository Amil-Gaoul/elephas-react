/** @jsx jsx */
import { jsx } from '@emotion/core';

import { TabProps } from './types';
import { tabBase, tabStatus } from './styles';

const Tab = (props: TabProps) => {
  const {
    children,
    active = false,
  } = props;

  return (
    <div
      css={[
        tabBase,
        active ? tabStatus.active : tabStatus.default,
      ]}
    >
      { children }
    </div>
  );
};

export default Tab;
