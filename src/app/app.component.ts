import { Component } from '@angular/core';
import { TodoService } from './todo.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  get items(): any[] {
    return this._todoService.getItems();
  }

  constructor(private _todoService: TodoService) {
  }

}
