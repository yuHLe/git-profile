import { Component } from '@angular/core';
import * as Rx from 'rxjs/Rx';


@Component({
  selector: 'my-app',
  template: `
  <h1>GitHub Profile</h1>

  <input id="search">
  `,
})
export class AppComponent {
  name = 'Angular';
  constructor() {
    const search$ = Rx.Observable
      .of('Hello World!')
      .subscribe(console.log);
  }
}