import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: '#3c3c58',
  colorSecondary: '#ff3e59',

  // UI
  appBg: '#f0f2fa',
  appContentBg: '#ffffff',
  appBorderColor: '#f0f2fa',
  appBorderRadius: 6,

  // Typography
  fontBase: '"Inter", sans-serif',
  fontCode: '"Fira Code", monospace',

  // Text colors
  textColor: '#222',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#333333',
  barSelectedColor: '#ff3e59',
  barBg: '#f7f9ff',

  // Form colors
  inputBg: 'white',
  inputBorder: '#adadad',
  inputTextColor: '#333333',
  inputBorderRadius: 6,

  brandTitle: 'Elephas',
});
