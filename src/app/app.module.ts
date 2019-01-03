import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule }  from '@angular/forms';
import { CreateEditTaskComponent } from './create-edit-task/create-edit-task.component';
import { ButtonsModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    CreateEditTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ButtonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
