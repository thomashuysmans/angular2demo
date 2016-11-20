import { Component, OnInit } from '@angular/core';

import { User } from './user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  newUser: User;

  constructor() {
    this.newUser = new User('','','');
   }

  submitUserRegistration() : void {
    console.log("User: " + this.newUser);
  }

}
