import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  data: any = {};
  date = new Date();
  constructor(private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.params.subscribe((data) => {
      this.data = data;
    });
  }

  ngOnInit() {
  }

}
