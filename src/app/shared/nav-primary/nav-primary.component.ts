import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.nav-primary',
  templateUrl: './nav-primary.component.html'
})
export class NavPrimaryComponent implements OnInit {

  navPrimaryItems = [
    { title: 'Overview' },
    {
      title: 'Components',
      children: [
        {
          linkText: 'Breadcrumbs',
          url: './components/breadcrumbs'
        },
        {
          linkText: 'Call to Action',
          url: './components/call-to-action'
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void { }

}