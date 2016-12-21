import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.css']
})
export class TodoViewComponent implements OnInit {

  @Input() item: any;
  constructor() { }

  ngOnInit() {
  }

}
