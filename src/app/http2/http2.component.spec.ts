/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Http2Component } from './http2.component';

describe('Http2Component', () => {
  let component: Http2Component;
  let fixture: ComponentFixture<Http2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Http2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Http2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
