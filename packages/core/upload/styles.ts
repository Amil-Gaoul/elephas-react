import { css } from '@emotion/core';
import reset from '../css-reset';

export const upload = css`
  ${reset};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 468px;
  height: 96px;
  border-radius: 4px;
  cursor: pointer;
  border-style: dashed;
  border-width: 1px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: #2962FF;

  &:hover {
    text-decoration: underline;
  }
`;

export const uploadAppearances = {
  default: css`
    border-color: #BABBC0;
    &:hover {
      border-color: #2962FF;
    }
  `,
  disabled: css`
    border-color: #BABBC0;
    opacity: 0.32;
    cursor: default;
    pointer-events: none;
  `,
  error: css`
    border-color: #E5243C;
  `,
  readonly: css`
    display: none;
  `,
};

export const uploadHighlighted = css`
  background: rgba(41, 98, 255, 0.08);
  border: 1px dashed #2962FF;
`;

export const error = css`
  ${reset};
  margin-top: 8px;
  font-size: 12px;
  line-height: 16px;
  color: #E5243C;
`;

export const fileError = css`
  ${reset};
  margin-top: 4px;
  font-size: 12px;
  line-height: 16px;
  color: #E5243C;
`;

export const input = css`
  display: none
`;

export const fileItemWrapper = css`
  ${reset};
  margin-bottom: 12px;
`;

export const fileItem = css`
  ${reset};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 468px;
  height: 40px;
  margin-top: 16px;
  padding: 0 12px;
  background: #EEEEEF;
  border-radius: 4px;
`;

export const fileItemError = css`
  border: 1px solid #E5243C;
`;

export const fileName = css`
  ${reset};
  display: inline-block;
  max-width: 320px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #27293B;
`;

export const fileExtension = css`
  ${reset};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #27293B;
`;

export const fileSize = css`
  ${reset};
  margin-left: 12px;
  font-size: 12px;
  line-height: 16px;
  color: #646572;
  white-space: nowrap;
`;

export const deleteIcon = css`
  ${reset};
  width: 20px;
  height: 20px;
  border-radius: 9001px;
  cursor: pointer;

  svg {
    fill: #BABBC0;
  }

  &:hover {
    svg {
      fill: #2962FF;
    }
  }
`;

export const errorIcon = css`
  ${reset};
  margin-right: 8px;
`;
