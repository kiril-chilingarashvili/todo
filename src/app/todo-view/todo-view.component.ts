import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.css']
})
export class TodoViewComponent implements OnInit {

  @Input() item: any;

  constructor(private _todoService: TodoService) { }

  ngOnInit() {
  }

  public remove() {
    if(confirm('Are you sure?')) {
      this._todoService.remove(this.item.id);
    }
  }

}
