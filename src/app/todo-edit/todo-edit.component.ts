import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {

  private _item: any;
  @Input() set item(value: any) {
    this._item = value;
    this.title = value.title;
  }
  get item(): any {
    return this._item;
  }
  public title: string;

  constructor(private _todoService: TodoService) { }

  ngOnInit() {
  }
 public apply() {
this._todoService.update(this.item.id, this.title);
this.item.mode = 'view';
 }
}
