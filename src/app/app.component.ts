import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { TITLE } from './title.token';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {


  constructor(
    private _router: Router,
    @Inject(TITLE) public title: string) {
  }

 redirect() {
   this._router.navigate(['/home/child1']);
 }
}
