module.exports = {
  stories: ['../src/**/*.stories.(js|mdx)'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-backgrounds/register',
    '@storybook/addon-contexts/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-a11y/register',
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true
      }
    }
  ],
};
