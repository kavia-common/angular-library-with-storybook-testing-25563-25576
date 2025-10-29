import { Component } from '@angular/core';

/*
  PUBLIC_INTERFACE
  Minimal demo harness placeholder until figma86-ui components are implemented and exported.
*/
@Component({
  selector: 'app-demo-harness',
  standalone: true,
  template: `
    <div style="display:flex; height:100vh; align-items:center; justify-content:center; font-family: var(--font-family-base, system-ui);">
      <div style="text-align:center;">
        <h1 style="margin-bottom: 8px;">Angular Library Demo Harness</h1>
        <p style="color:#555; max-width: 720px;">
          The figma86-ui library components are not yet implemented in this snapshot.
          Build and packaging configuration has been verified. You can now add components
          to the library and export them via projects/figma86-ui/src/public-api.ts.
        </p>
      </div>
    </div>
  `
})
export class DemoHarnessComponent {}
