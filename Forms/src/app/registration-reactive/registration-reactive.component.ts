import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-reactive',
  templateUrl: './registration-reactive.component.html',
  styleUrls: ['./registration-reactive.component.css']
})
export class RegistrationReactiveComponent {

 registerForm: FormGroup;

 constructor(private fb: FormBuilder) {
   this.registerForm = fb.group({
     "username": ["", Validators.required],
     "email": ["", Validators.required],
     "password": ["", Validators.required]
   });
  }

  onSubmit() {
    console.log(this.registerForm);
  }

}
