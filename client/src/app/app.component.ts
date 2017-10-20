import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  // headers = new HttpHeaders()
  //   .set('Content-Type', 'application/json');
    
  constructor(private http: HttpClient){ }

  ngOnInit(): void {
    console.log("Making http call");
    this.http.get("https://127.0.0.1:3000/server/api/testify", {
      //headers: this.headers,
      responseType: "text"})
      .subscribe((res: any) => { 
        console.log(res);
        this.title = res;
      });

    this.http.get("https://127.0.0.1:3000/server/api/newuser")
      .subscribe((response: any) => {
        console.log(response);
      });
  }
}
