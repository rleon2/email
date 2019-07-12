import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormsModule} from '@angular/forms'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
  
})
export class LoginPageComponent implements OnInit {
  title = "login-page";
  loginForm: FormGroup;

  constructor() { 
  
  }

  ngOnInit() {  this.loginForm = new FormGroup({
    'email':new FormControl([Validators.required, Validators.email])


})

this.loginForm.statusChanges.subscribe(
  (status) => console.log(status)
);


  };

  onSubmit() {
    console.log(this.loginForm);
    console.log(this.loginForm.value);
  }
  
  onReset() {
    this.loginForm.reset();
  }
 
}
