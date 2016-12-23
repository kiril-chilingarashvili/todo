import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import {
    TodoService,

    TodoAddComponent,
    TodoEditComponent,
    TodoItemComponent,
    TodoListComponent,
    TodoViewComponent

 }   from './_index';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,

        MaterialModule
    ],
    exports: [
        TodoAddComponent,
        // TodoEditComponent,
        // TodoItemComponent,
        TodoListComponent,
        // TodoViewComponent
        ],
    declarations: [
        TodoAddComponent,
        TodoEditComponent,
        TodoItemComponent,
        TodoListComponent,
        TodoViewComponent],
    providers: [TodoService],
})
export class TodoModule { }
