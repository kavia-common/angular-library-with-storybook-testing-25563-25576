import type { Preview } from '@storybook/angular';

// PUBLIC_INTERFACE
export const parameters: Preview['parameters'] = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
    expanded: true,
    sort: 'alpha',
  },
  options: {
    storySort: {
      order: ['Introduction', 'Components', 'Pages'],
    },
  },
};

// Placeholder: apply global theme tokens for Ocean Professional across stories.
// You can import global styles or inject CSS variables for tokens here.
// Example (uncomment and adjust when tokens are available):
// import '../src/styles.css';
// Or if tokens are in the library:
// import '../projects/figma86-ui/src/lib/styles/tokens.scss';

export default { parameters };
