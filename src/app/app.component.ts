import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-learning';
  headers;
  numbers = [1, 2, 3, 4, 5];
  onlyOdd = false;
  evenNumbers = [2, 4];
  oddNumbers = [1, 3, 5];
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'x-rapidapi-key': '0afffbcfb4msh151e32a1bd8a873p133d65jsn392ba09aba88',
      'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
      useQueryString: 'true',
    });
    const data = {};
    // this.http
    //   .get(`https://covid-19-data.p.rapidapi.com/country/it`, {
    //     headers: this.headers,
    //   })
    //   .subscribe((res) => {
    //     console.log(res);
    //   });
  }
  ShowDetail(event) {
    this.title = event;
  }
}
