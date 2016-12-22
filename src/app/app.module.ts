import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OpaqueToken } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TodoModule } from './todo/todo.module';
import { TodoComponent } from './todo/todo.component';
import { TITLE } from './title.token';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';

const appRoutes: Routes = [
  { path: 'todo/:title/item/:subtitle', component: TodoComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      abc: 'abcd'
    },
    children: [
      {
        path: 'child1',
        component: Child1Component,
      },
      {
        path: 'child2',
        component: Child2Component,
      }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    HomeComponent,
    PageNotFoundComponent,
    Child1Component,
    Child2Component
  ],
  imports: [
    TodoModule,
    BrowserModule,

    RouterModule.forRoot(appRoutes)
    // FormsModule,
    // HttpModule
  ],
  providers: [
    { provide: TITLE, useValue: 'TODO' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
