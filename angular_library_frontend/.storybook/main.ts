import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  framework: '@storybook/angular',
  stories: [
    '../src/**/*.stories.@(ts|mdx)',
    '../projects/**/*.stories.@(ts|mdx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y'
  ],
  core: {
    builder: '@storybook/angular-builder'
  },
  docs: {
    defaultName: 'Docs',
  }
};
export default config;
