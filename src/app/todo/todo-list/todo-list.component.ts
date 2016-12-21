import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  get items(): any[] {
    return this._todoService.getItems();
  }

  constructor(private _todoService: TodoService) {
  }

  ngOnInit() {
  }

}
