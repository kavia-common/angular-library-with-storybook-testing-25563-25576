/*
  PUBLIC_INTERFACE
  Figma86 UI Library public API exports.

  Styles:
  - SCSS tokens: `@use 'figma86-ui/styles/tokens' as *;`
  - SCSS base:   `@use 'figma86-ui/styles/base' as f86;` (file `_base.scss`)

  Note:
  This library exposes style include paths via ng-packagr (see ng-package.json "styleIncludePaths"),
  enabling consumers to import SCSS directly by the concise path above.
  No runtime JS export is required for SCSS; documentation here is for developer experience.
*/

export * from './lib/op-button';
