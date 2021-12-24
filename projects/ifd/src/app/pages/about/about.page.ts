import { Component, OnInit } from '@angular/core';

@Component({
  template: ` <p>IFD About Page</p> `,
  styles: [
    `
      :host {
        display: flex;

        p {
          color: red;
        }
      }
    `,
  ],
})
export class AboutPage implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
