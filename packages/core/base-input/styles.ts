import { css, SerializedStyles } from '@emotion/core';
import reset from '../css-reset';


const wrapper = css`
  ${reset};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const field = css`
  ${reset};
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 4px 4px 0 0;
`;

const fieldAppearances = {
  default: css`
    background-color: #EEEEEF;
  `,
  disabled: css`
    background-color: #F5F5F6;
  `,
  error: css`
    background-color: #EEEEEF;
  `,
  readonly: css`
    background-color: #F5F5F6;
  `,
};

const fieldSizes = {
  2: css`
    width: 96px;
  `,
  4: css`
    width: 208px;
  `,
  6: css`
    width: 320px;
  `,
  8: css`
    width: 432px;
  `,
  12: css`
    width: 656px;
  `,
  '100%': css`
    width: 100%;
  `,
};

// max-width is set here to prevent expanded label becoming wider than field
// `pointer-events: none` set for empty native select label click
const label = css`
  ${reset};
  display: block;
  max-width: calc(100% - 48px);
  padding: 9px 12px 0 12px;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: #646572;
  transform-origin: top left;
  transition: transform 200ms cubic-bezier(0, 0, 0.2, 1);
  pointer-events: none;
`;

const labelExpand = css`
  transform: scale(1.167) translateY(8px);
`;

const disabledLabel = css`
  color: #BABBC0;
`;

const input = css`
  ${reset};

  padding: 3px 12px 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #27293B;

  &::-webkit-inner-spin-button, 
  &::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0;
  }

  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }  
  
  & + span {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 0;
  }
`;

const inputAppearances = {
  default: css`    
    & + span {
      height: 1px;
      background-color: #646572;
    }
    &:focus + span {
      height: 2px;
      background-color: #2962FF;
    }
  `,
  disabled: css`
    color: #BABBC0;
    background-color: #F5F5F6;
    & + span {
      height: 1px;
      background-color: #BABBC0;
    }
  `,
  error: css`
    & + span {
      height: 1px;
      background-color: #E5243C;
    }
    &:focus + span {
      height: 2px;
      background-color: #E5243C;
    }
  `,
  readonly: css`
    font-weight: 400;
    color: #646572;
  `,
};

const error = css`
  margin-top: 2px;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: #E5243C;
`;

const hint = css`
  margin-top: 2px;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: #646572;
`;

const disabledHint = css`
  color: #BABBC0;
`;

const textarea = css`
  ${input};
  resize: vertical;
`;

const fieldArrow = css`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 27px;
    right: 12px;
    display: block;
    width: 8px;
    height: 5px;
    background-image: url("data:image/svg+xml,%3Csvg width='8' height='5' viewBox='0 0 8 5' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.330314 1.86173L3.21591 4.68155C3.65042 5.10615 4.35232 5.10615 4.78684 4.68155L7.67243 1.86173C8.37433 1.17583 7.87298 0 6.8814 0H1.11021C0.118629 0 -0.371588 1.17583 0.330314 1.86173Z' fill='%23646572'/%3E%3C/svg%3E");
  }
`;

// margin-top and padding-top hack to make all box clickable
const select = css`
  ${input};
  margin-top: -25px;
  padding-top: 28px;
  border-radius: 0;
`;

const control: { [key: string]: SerializedStyles } = {
  input,
  textarea,
  select,
};

export {
  error,
  hint,
  control,
  inputAppearances,
  label,
  field,
  fieldAppearances,
  fieldSizes,
  wrapper,
  labelExpand,
  disabledLabel,
  disabledHint,
  fieldArrow,
};
