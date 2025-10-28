import type { Preview } from '@storybook/angular';

// Import the token stylesheet so all stories get the Ocean Professional theme variables
import '../src/styles.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: ['Library', ['App Shell', 'Navigation', 'Inputs', 'Data Display', 'Feedback', 'Misc']]
      }
    }
  },
};

export default preview;
