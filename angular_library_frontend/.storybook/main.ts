import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  core: {
    builder: 'webpack5',
  },
  stories: [
    // Scope stories to the library; adjust or extend as new packages are added
    '../projects/figma86-ui/src/**/*.stories.@(ts|mdx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
    '@storybook/addon-a11y',
  ],
  docs: {
    autodocs: 'tag',
  },
  typescript: {
    // Let Storybook manage type checking where needed
    check: false,
    reactDocgen: false,
  },
};

export default config;
