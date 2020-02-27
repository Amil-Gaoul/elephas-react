import { css } from '@emotion/core';

const reset = css`
  box-sizing: border-box;
  -webkit-box-sizing:  border-box;
  -moz-box-sizing: border-box;
  width: auto;
  max-width: none;
  outline: none;
  border: none;
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  font-size: 100%;
  font-family: 'Inter', sans-serif;
  line-height: normal;
  -moz-appearance: none;
  -webkit-appearance: none;
  
  &:focus {
    outline: 0;
  }
`;

export default reset;
