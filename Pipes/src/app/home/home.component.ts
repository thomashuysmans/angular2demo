import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dateOfToday: Date;
  amount: Number;

  constructor() { }

  ngOnInit() {
    this.dateOfToday = new Date();
    this.amount = 1145.55;
  }

}
