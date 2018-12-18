import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule }  from '@angular/forms';
import { CreateEditTaskComponent } from './create-edit-task/create-edit-task.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateEditTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
