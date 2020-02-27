import { addParameters, configure } from '@storybook/react';
import theme from './theme';

addParameters({
  options: {
    theme,
  },
});

configure([
  require.context('../docs', true, /\.stories\.mdx$/),
  require.context('../packages', true, /\.stories\.mdx$/),
], module);
