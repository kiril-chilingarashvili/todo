import { Component, Inject } from '@angular/core';
import { TITLE } from './title.token';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(
    @Inject(TITLE) public title: string) {
  }

}
