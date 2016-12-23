import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-http2',
  templateUrl: './http2.component.html',
  styleUrls: ['./http2.component.css']
})
export class Http2Component implements OnInit {

  private _searchABC: string;
  data: any;
  private _subject = new Subject<string>();

  set search(value: string) {
    this._searchABC = value;
    this._subject.next(value);
    // this._fetch(this._searchABC);
  }
  get search(): string {
    return this._searchABC;
  }

  constructor(
    private _http: Http
  ) { }

  ngOnInit() {
    let obs = this._subject.asObservable()

      .map(c => c.toUpperCase())
      .debounceTime(200)
      .map(value => this._fetch(value))
      .switch()
      .map(response => response.json())
      ;

    obs.subscribe(value => {
      this.data = value;
      console.log('obs 2', value);
    });
  }
  private _fetch(search: string) {
    let url = 'https://www.googleapis.com/youtube/v3/search';
    let queryUrl = `${url}?q=${search}&key=AIzaSyC-UGkKXm1PyfEcADm-5TWm6Yb0y7ByzlY&part=snippet&type=video&maxResults=10`;
    let request = this._http.request(queryUrl);
    return request;
    // request.subscribe(response => {
    //   console.log(response);
    //   let data = response.json();
    //   console.log(data);
    //   this.data = data;
    // });
    // let promiseBody = function (goodWork, bad) {
    //   let error = false;
    //   setTimeout(function () {
    //     if (!error) {
    //       goodWork('resolved');
    //     }
    //   }, 2000);
    //   setTimeout(function () {
    //     error = true;
    //     bad('ERROR! Timeout!');
    //   }, 1000);
    // };
    // let p = new Promise<any>(promiseBody);

    // p
    //   .then(data => {
    //     console.log(data);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //     return new Promise<string>((r1, r2) => {
    //       setTimeout(function () {
    //         r2('here is refresh token');
    //       }, 1000);
    //     })
    //       .then(ooo => { })
    //       .catch(e => {
    //         console.log('rejected in sub chain')
    //       }
    //       );
    //   })
    //   .then(data => {
    //     console.log('chain continuation', data);
    //   })
    //   .catch(e => {
    //     console.log('handleeeee');
    //   }
    //   );


    // let f = function (callback: () => void) {
    //   callback();
    // }
  }
}
