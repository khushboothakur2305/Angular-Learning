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
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'x-rapidapi-key': '0afffbcfb4msh151e32a1bd8a873p133d65jsn392ba09aba88',
      'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
      useQueryString: 'true',
    });
    // this.http
    //   .get(
    //     `https://covid-19-data.p.rapidapi.com/report/country?name=Italy&date=2020-04-01`,
    //     {
    //       headers: this.headers,
    //     }
    //   )
    //   .subscribe((res) => {
    //     console.log(res);
    //   });
  }
}
