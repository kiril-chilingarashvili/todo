import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Http } from '@angular/http';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  private _sub: Subject<string> = new Subject<string>();
  private _value: string;
  set search(value: string) {
    this._value = value;
    this.query(value);
  }
  get search(): string {
    return this._value;
  }

  public data: any = {};

  constructor(private _http: Http) { }

  ngOnInit() {
  }

  private query(search: string) {
    let url = 'https://www.googleapis.com/youtube/v3/search';
    let queryUrl = `${url}?q=${search}&key=AIzaSyC-UGkKXm1PyfEcADm-5TWm6Yb0y7ByzlY&part=snippet&type=video&maxResults=10`;
    // this._http.get(queryUrl).map(result => result.json()).toPromise();
    this._http.get(queryUrl).map(result => result.json()).toPromise()
      .then(data => this.data = data);
  }
}
