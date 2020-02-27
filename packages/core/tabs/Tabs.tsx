/** @jsx jsx */
import { jsx } from '@emotion/core';

import { TabsProps } from './types';
import { tabsBase } from './styles';

const Tabs = (props: TabsProps) => {
  const {
    children,
  } = props;

  return (
    <div
      css={[tabsBase]}
    >
      { children }
    </div>
  );
};

export default Tabs;
