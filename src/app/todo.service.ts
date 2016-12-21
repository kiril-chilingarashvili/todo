import { Injectable } from '@angular/core';

export class TodoItem {
  public mode: string = 'view';
  constructor(public id: number, public title: string) {
  }
}

@Injectable()
export class TodoService {

  private _id: number = 1;
  private _items: TodoItem[] = [];
  constructor() { }

  public getItems(): TodoItem[] {
    return this._items;
  }
  public add(title: string): TodoItem {
    let item = new TodoItem(this._id, title);
    this._id++;
    this._items.push(item);
    return item;
  }
  public remove(id: number) {
    let i = -1;
    let ind = 0;
    for (let item of this._items) {
      if (item.id === id) {
        i = ind;
        break;
      }
      ind++;
    }
    if (i >= 0) {
      this._items.splice(i, 1);
    }
  }
  public update(id: number, title: string) {
    for (let item of this._items) {
      if (item.id === id) {
        item.title = title;
        break;
      }
    }
  }
}
