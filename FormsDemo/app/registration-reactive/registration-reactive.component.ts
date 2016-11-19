import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'registration-reactive',
  templateUrl: './registration-reactive.component.html'
})
export class RegistrationReactiveComponent implements OnInit {

  registerForm: FormGroup;

  registrationForm = new FormGroup({
    username: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    confirmpassword: new FormControl()
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required]
    });
  }

  onSubmit(value:string): void {
    console.log('you submitted value: ', value);
  }
}