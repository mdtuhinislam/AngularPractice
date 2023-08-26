import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  userForm: FormGroup;
  constructor(private fb: FormBuilder) { 
    
}

  ngOnInit() {
    this.userForm = this.fb.group({
      name:[''],
      address:[''],
      email:[''],
      mobile:['']

    })
    
  }
  displayNotification:boolean = false;
  closNotification(){
    this.displayNotification = true;
  }

}
