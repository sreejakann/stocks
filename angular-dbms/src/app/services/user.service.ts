import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';
import { map } from 'rxjs/operators';
import { User } from '../user';



@Injectable()
export class UserService {
	user: any;
	constructor(private http: Http) { }


    loginUser(username: string, password: string) {
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('access-control-allow-origin', '*');
      return this.http.get('http://874791a2.ngrok.io/StocksApp/rest/StocksAPI/login?username={username}&password={password}')
      .map((response: Response) => {
          // login successful if there's a jwt token in the response
          let user = response.json();
          if (user && user.token) {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('currentUser', JSON.stringify(user));
              console.log(localStorage.getItem('currentUser'));
            }
      });
    }


    create(user: User) {
        console.log("inside user service");
        let url = "http://874791a2.ngrok.io/StocksApp/rest/StocksAPI/signup?username=" + user.username 
        + "&password=" + user.password;

        console.log(url);
        return this.http.get('https://874791a2.ngrok.io/StocksApp/rest/StocksAPI/getStocks')
        .map((response: Response) => {
          let user = response.json();
          console.log(user);
          if (user.status==200) {
              console.log("success");
            }
        });
    }

}