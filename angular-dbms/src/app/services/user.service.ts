import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { map } from 'rxjs/operators';
import { User } from '../user';
import { Stocks } from '../stocks';



@Injectable()
export class UserService {
	user: any;
	constructor(private http: Http) { }


    loginUser(username: string, password: string) {
      const headers = new Headers();
      headers.append('access-control-allow-origin', '*');

      let url = "http://874791a2.ngrok.io/StocksApp/rest/StocksAPI/login?username=" + username 
        + "&password=" + password;

      return this.http.get(url, {headers: headers})
      .map((response: Response) => {
          let user = response.json();
      });
    }


    create(user: User) {
        console.log("inside user service");
        let url = "http://874791a2.ngrok.io/StocksApp/rest/StocksAPI/signup?username=" + user.username 
        + "&password=" + user.password;

        console.log(url);
        const headers = new Headers();
        headers.append('access-control-allow-origin', '*');
        return this.http.get(url, {headers: headers})
        .map((response: Response) => {
          let user = response.json();
          console.log(user);
          if (user.status==200) {
              console.log("success");
            }
        });
    }

}