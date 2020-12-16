import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  breadcrumbsHtml  = `
  \`\`\`html
  <nav aria-label="breadcrumb">
    <ol class="bsds-breadcrumbs">
      <li class="bsds-breadcrumb-item">
        <a href="grandparent">Grandparent Page</a>
      </li>
      <li class="bsds-breadcrumb-item">
        <a href="parent">Parent Page</a>
      </li>
      <li class="bsds-breadcrumb-item bsds-breadcrumb-item-active" aria-current="page">Current Page</li>
    </ol>
  </nav>
  \`\`\`
  `;

  constructor() { }

  ngOnInit(): void { }

}