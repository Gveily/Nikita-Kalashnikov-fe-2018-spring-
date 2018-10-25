import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import ageValidator from './Validators/ageValidator';
import nameValidator from './Validators/nameValidator';
import dateValidator from './Validators/dateValidator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'authorization form';
  headerContent: string = 'Form';
  rForm: FormGroup;
  post: any;
  age:number;
  name:string = '';
  dateOfBirth: string = '';
  dateOfFirstLogin: string = '';
  dateOfNotification: string = '';
  incorrectAgeAlert: string = 'Your age must be between 18 and 65. and only INTEGER numbers.';
  incorrectDateFormat: string = 'Your date must be in format YYYY/MM/DD or DD MMMM YYYY or DD-MMM-YY';
  incorrectDateValue: string = 'Incorrect date value';
  titleAlert: string = 'This field is required';
  invalidNameAlert: string = 'There should be only letters beginning with a capital, length: 2-9 letters. One space between words. Only letters beginning with a capital, length: 2-15 letters.';

  constructor(){
  
    }

    ngOnInit(){
      this.rForm = new FormGroup ({
        name: new FormControl (null, Validators.required, nameValidator),
        age: new FormControl (null, [Validators.required, ageValidator]),
        dateOfBirth: new FormControl (null, [Validators.required, dateValidator]),
        dateOfFirstLogin: new FormControl (null, [Validators.required, dateValidator]),
        dateOfNotification: new FormControl (null, [Validators.required, dateValidator])
      }); 
    }
    addPost(post){
      this.age = post.age;
      this.name = post.name;
      this.dateOfBirth = post.dateOfBirth;
      this.dateOfFirstLogin = post.dateOfFirstLogin;
      this.dateOfNotification = post.dateOfNotification;
  }
}
