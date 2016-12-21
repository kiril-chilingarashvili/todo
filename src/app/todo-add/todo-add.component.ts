import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css'],
})
export class TodoAddComponent implements OnInit {

  public title: string;
  constructor(private _todoService: TodoService) { }

  ngOnInit() {
  }

  public addItem() {
    this._todoService.add(this.title);
    this.title = '';
  }
}
