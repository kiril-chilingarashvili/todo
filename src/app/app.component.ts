import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { TITLE } from './title.token';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {


  constructor(
    @Inject(TITLE) public title: string) {
  }

}
