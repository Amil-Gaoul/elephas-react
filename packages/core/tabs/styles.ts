import { css } from '@emotion/core';

const tabsReset = css`
  box-sizing: border-box;
`;

const tabReset = css`
  box-sizing: border-box;
`;

const tabsBase = css`
  ${tabsReset};
  display: flex;

  box-shadow: inset 0 -3px 0 #DCDDE0;
`;

const tabBase = css`
  ${tabReset};
  padding: 12px 24px;
  border-bottom-width: 3px;
  border-bottom-style: solid;
  font-size: 14px;
  cursor: pointer;
`;

const tabStatus = {
  default: css`
    color: #646572;
    border-bottom-color: #DCDDE0;

    &:hover {
      color: #27293B;
    }
  `,
  active: css`
    color: #27293B;
    border-bottom-color: #2962FF;
  `,
};

export {
  tabsBase,
  tabBase,
  tabStatus,
};
