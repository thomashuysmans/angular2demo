import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loading: boolean = false;
  data : any;
  constructor(private http: Http) { }

  ngOnInit() {
  }

  getData(){
    this.loading = true;
    this.http.get('http://jsonplaceholder.typicode.com/posts')
      .subscribe((res : Response) => {
        this.data = res.json();
        this.loading = false;
      });
  }

  doPost(){
    this.loading = true;
    this.http.post(
      'http://jsonplaceholder.typicode.com/posts',
      JSON.stringify({
        body: 'bar',
        title: 'foo',
        userId: 1
      }))
      .subscribe((res: Response) => {
        this.loading = false;
        this.data = res.json();
      });
  }

  doDelete(): void {
    this.loading = true;
    this.http.delete('http://jsonplaceholder.typicode.com/posts/1')
      .subscribe((res: Response) => {
        this.data = res.json();
        this.loading = false;
      });
  }
}
