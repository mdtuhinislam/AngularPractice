import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { FormsModule, FormControl,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [	
    AppComponent,
      CreateStudentComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    FormControl,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
