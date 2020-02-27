const path = require('path');

module.exports = [
  '@storybook/addon-docs/react/preset',
  {
    name: '@storybook/preset-typescript',
    options: {
      tsDocgenLoaderOptions: {
        tsconfigPath: path.resolve(__dirname, '../tsconfig.json'),
        propFilter: (prop) => (prop.parent ? !prop.parent.fileName.includes('node_modules') : true),
      },
      shouldExtractLiteralValuesFromEnum: true,
      include: [path.resolve(__dirname, '../packages')],
    },
  },
];
