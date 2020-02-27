import { css } from '@emotion/core';
import reset from '../css-reset';

export const root = css`
  ${reset};
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const rootDisabled = css`
  cursor: default;
  pointer-events: none;
`;

export const radioLabel = css`
  ${reset};
  padding-left: 8px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: #27293B;
`;

export const customInput = css`
  ${reset};
  padding: 0;
  margin: 0;
  width: 0;
  height: 0;
  opacity: 0;
  visibility: hidden;

  & + .elphs__radioIcon {
    ${reset};
    position: relative;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #646572;
    
    &::before {
      content: '';
      position: absolute;
      top: calc(50% - 4px);
      left: calc(50% - 4px);
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: transparent;
    }
  }

  &:checked + .elphs__radioIcon {
    border-color: #2962FF;
    
    &::before {
      content: '';
      background-color: #2962FF;
    }
  }
 
  &:disabled + .elphs__radioIcon {
    opacity: 0.32;
    border-color: #646572;
  }

  &:disabled ~ .elphs__radioLabel {
    opacity: 0.32;
  }
  
  &:checked:disabled + .elphs__radioIcon::before {
    background-color: #646572;
  }

  &[readonly] + .elphs__radioIcon {
    border-color: #EEEEEF;
    background-color: #EEEEEF;
  }
  
  &:checked[readonly] + .elphs__radioIcon::before {
    background-color: #27293B;
  }

  &[readonly] ~ .elphs__radioLabel {
    color: #646572;
  }
`;
