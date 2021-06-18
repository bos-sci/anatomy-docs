import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-call-to-action',
  templateUrl: './call-to-action.component.html'
})
export class CallToActionComponent implements OnInit {

  defaultCallToActionHtml  = `
  \`\`\`html
  <!-- Using an anchor element -->
  <a href="/url" class="bsds-cta">
    Default Call to Action
  </a>

  <!-- Using a button element -->
  <button type="button" class="bsds-cta">
    Default Call to Action
  </button>
  \`\`\`
  `;

  assertiveCallToActionHtml  = `
  \`\`\`html
  <!-- Using an anchor element -->
  <a href="/url" class="bsds-cta bsds-cta-assertive">
    Assertive Call to Action
  </a>

  <!-- Using a button element -->
  <button type="button" class="bsds-cta bsds-cta-assertive">
    Assertive Call to Action
  </button>
  \`\`\`
  `;

  ghostCallToActionHtml  = `
  \`\`\`html
  <!-- Using an anchor element -->
  <a href="/url" class="bsds-cta bsds-cta-ghost">
    Ghost Call to Action
  </a>

  <!-- Using a button element -->
  <button type="button" class="bsds-cta bsds-cta-ghost">
    Ghost Call to Action
  </button>
  \`\`\`
  `;

  constructor() { }

  ngOnInit(): void { }

}