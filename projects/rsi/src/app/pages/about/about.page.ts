import { Component, OnInit } from '@angular/core';

@Component({
  template: ` <p>RSI About Page</p> `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class AboutPage implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
