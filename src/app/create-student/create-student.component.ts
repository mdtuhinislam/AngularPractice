import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

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
      mobile:[''],
      presentAddress:[''],
      parmanentAddress:[''],
      parentsMobile:[''],
      parentsEmail:['']

    })
    
  }
  displayNotification:boolean = false;
  closNotification(){
    this.displayNotification = true;
  }
  onSubmit(){
    console.log(this.userForm.value);
  }

}
