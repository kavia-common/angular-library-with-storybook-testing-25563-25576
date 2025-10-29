import type { Preview } from '@storybook/angular';

// Import Ocean Professional tokens and base styles globally so all stories render with the theme.
// We import directly from the library source to leverage Angular's builder and Webpack style handling.
import '../projects/figma86-ui/src/lib/styles/tokens.scss';
import '../projects/figma86-ui/src/lib/styles/_base.scss';

const preview: Preview = {
  parameters: {
    // Minimalist backgrounds using Ocean Professional palette
    backgrounds: {
      default: 'Surface',
      values: [
        { name: 'Background', value: '#FFFFFF' },  // $ocn-background
        { name: 'Surface', value: '#F9FAFB' },     // $ocn-surface
        { name: 'Slate', value: '#374151' },       // $ocn-primary
        { name: 'Gray', value: '#9CA3AF' },        // $ocn-secondary
      ],
    },
    // Keep layout centered to highlight minimalist components with generous whitespace
    layout: 'centered',
    // Docs theme preferences (keep clean UI)
    options: {
      storySort: {
        order: ['Figma86 UI', ['OpButton', '*'], '*'],
      },
    },
    docs: {
      canvas: { sourceState: 'shown' },
      source: {
        language: 'ts',
        type: 'auto',
      },
      toc: {
        headingSelector: 'h2, h3',
      },
    },
    // Controls settings to keep UI minimal
    controls: {
      expanded: false,
    },
  },
};

export default preview;
