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

export const checkboxLabel = css`
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

  & + .elphs__checkboxIcon {
    ${reset};
    position: relative;
    width: 20px;
    height: 20px;
    border-radius: 4px;
    border: 2px solid #BABBC0;
  }

  &:checked + .elphs__checkboxIcon {
    background-color: #2962FF;
    border-color: #2962FF;
    
    &::before {
      ${reset};
      content: '';
      position: absolute;
      top: 4.5px;
      left: 2px;
      display: block;
      width: 12px;
      height: 8px;
      background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.83062 0.464478L5.11645 5.17864L2.16979 2.23281L0.991455 3.41114L5.11645 7.53531L6.29479 6.35698L11.009 1.64281L9.83062 0.464478Z' fill='white'/%3E%3C/svg%3E%0A");
    }
  }

  &:checked:disabled + .elphs__checkboxIcon {
    background-color: #646572;
    border-color: #646572;
  }

  &:disabled + .elphs__checkboxIcon {
    opacity: 0.32;
  }
  
  &:disabled ~ .elphs__checkboxLabel {
    opacity: 0.32;
  }

  &[aria-readonly="true"] + .elphs__checkboxIcon {
    border-color: #EEEEEF;
    background-color: #EEEEEF;
  }

  &[aria-readonly="true"]:checked + .elphs__checkboxIcon {
    border-color: #BABBC0;
    background-color: #BABBC0;

    &::before {
      background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.83062 0.464478L5.11645 5.17864L2.16979 2.23281L0.991455 3.41114L5.11645 7.53531L6.29479 6.35698L11.009 1.64281L9.83062 0.464478Z' fill='#FFFFFF'/%3E%3C/svg%3E%0A");
    }
  }

  &[aria-readonly="true"] ~ .elphs__checkboxLabel {
    color: #646572;
  }
`;
