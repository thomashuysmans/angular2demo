import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  datumVanVandaag: Date;

  constructor() { }

  ngOnInit() {
    this.datumVanVandaag = new Date();
  }

}
