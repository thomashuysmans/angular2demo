import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  datumVanVandaag: Date;
  amount: Number;

  constructor() { }

  ngOnInit() {
    this.datumVanVandaag = new Date();
    this.amount = 1145.55;
  }

}
