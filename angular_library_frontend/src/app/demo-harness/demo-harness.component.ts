import { Component } from '@angular/core';
import { OpButtonComponent } from '../../../projects/figma86-ui/src/lib/op-button/op-button.component';

/*
  PUBLIC_INTERFACE
  DemoHarnessComponent showcases the OpButtonComponent variants and sizes with a minimalist
  Ocean Professional themed layout.

  - Renders variant rows: primary, secondary, success, error
  - Shows sizes per variant: sm, md, lg
  - Wires (pressed) handlers to log interactions
*/
@Component({
  selector: 'app-demo-harness',
  standalone: true,
  imports: [OpButtonComponent],
  template: `
    <div class="harness">
      <header class="harness__header">
        <h1 class="harness__title">Figma86 UI — OpButton Showcase</h1>
        <p class="harness__subtitle">
          Variants and sizes using Ocean Professional tokens. Click any button to see console logs.
        </p>
      </header>

      <section class="harness__section">
        <h2 class="harness__heading">Variants</h2>

        <div class="row">
          <div class="row__label">Primary</div>
          <div class="row__content">
            <f86-op-button label="Primary sm" variant="primary" size="sm" (pressed)="onPressed('primary sm', $event)"></f86-op-button>
            <f86-op-button label="Primary md" variant="primary" size="md" (pressed)="onPressed('primary md', $event)"></f86-op-button>
            <f86-op-button label="Primary lg" variant="primary" size="lg" (pressed)="onPressed('primary lg', $event)"></f86-op-button>
          </div>
        </div>

        <div class="row">
          <div class="row__label">Secondary</div>
          <div class="row__content">
            <f86-op-button label="Secondary sm" variant="secondary" size="sm" (pressed)="onPressed('secondary sm', $event)"></f86-op-button>
            <f86-op-button label="Secondary md" variant="secondary" size="md" (pressed)="onPressed('secondary md', $event)"></f86-op-button>
            <f86-op-button label="Secondary lg" variant="secondary" size="lg" (pressed)="onPressed('secondary lg', $event)"></f86-op-button>
          </div>
        </div>

        <div class="row">
          <div class="row__label">Success</div>
          <div class="row__content">
            <f86-op-button label="Success sm" variant="success" size="sm" (pressed)="onPressed('success sm', $event)"></f86-op-button>
            <f86-op-button label="Success md" variant="success" size="md" (pressed)="onPressed('success md', $event)"></f86-op-button>
            <f86-op-button label="Success lg" variant="success" size="lg" (pressed)="onPressed('success lg', $event)"></f86-op-button>
          </div>
        </div>

        <div class="row">
          <div class="row__label">Error</div>
          <div class="row__content">
            <f86-op-button label="Error sm" variant="error" size="sm" (pressed)="onPressed('error sm', $event)"></f86-op-button>
            <f86-op-button label="Error md" variant="error" size="md" (pressed)="onPressed('error md', $event)"></f86-op-button>
            <f86-op-button label="Error lg" variant="error" size="lg" (pressed)="onPressed('error lg', $event)"></f86-op-button>
          </div>
        </div>
      </section>

      <section class="harness__section">
        <h2 class="harness__heading">Disabled state</h2>
        <div class="row">
          <div class="row__label">Primary (disabled)</div>
          <div class="row__content">
            <f86-op-button label="Disabled" variant="primary" size="md" [disabled]="true" (pressed)="onPressed('disabled primary md', $event)"></f86-op-button>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      --pad: 24px;
      --gap: 16px;
      --gap-lg: 24px;
      --bd: 1px solid rgba(17,24,39,0.1);
      font-family: var(--font-family-base, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Inter, Helvetica, Arial, sans-serif);
      color: var(--ocn-text, #111827);
      background: var(--ocn-surface, #F9FAFB);
      min-height: 100vh;
    }
    .harness {
      max-width: 1000px;
      padding: var(--pad);
      margin: 0 auto;
    }
    .harness__header {
      margin-bottom: var(--gap-lg);
    }
    .harness__title {
      margin: 0 0 8px 0;
      font-size: 24px;
      font-weight: 600;
      color: var(--ocn-text, #111827);
    }
    .harness__subtitle {
      margin: 0;
      color: rgba(17,24,39,0.7);
      font-size: 14px;
    }
    .harness__section {
      background: var(--ocn-background, #FFF);
      border: var(--bd);
      border-radius: 12px;
      padding: var(--pad);
      box-shadow: 0 1px 2px rgba(0,0,0,0.06);
      margin-bottom: var(--gap-lg);
    }
    .harness__heading {
      font-size: 16px;
      font-weight: 600;
      margin: 0 0 var(--gap) 0;
    }
    .row {
      display: grid;
      grid-template-columns: 180px 1fr;
      align-items: center;
      gap: var(--gap);
      padding: 12px 0;
      border-top: var(--bd);
    }
    .row:first-of-type {
      border-top: 0;
      padding-top: 0;
    }
    .row__label {
      color: rgba(17,24,39,0.8);
      font-size: 14px;
      font-weight: 500;
    }
    .row__content {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      align-items: center;
    }
  `]
})
export class DemoHarnessComponent {
  // PUBLIC_INTERFACE
  onPressed(label: string, event: globalThis.Event): void {
    /** Log button interaction to the console for demo visibility */
    console.log('[OpButton pressed]', label, event);
  }
}
