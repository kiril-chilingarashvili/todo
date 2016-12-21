import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OpaqueToken } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodoModule } from './todo/todo.module';
import { TITLE } from './title.token';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    TodoModule,
    BrowserModule,
    // FormsModule,
    // HttpModule
  ],
  providers: [
    { provide: TITLE, useValue: 'TODO'}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
