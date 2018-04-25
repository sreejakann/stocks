import { Injectable }   from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Observable }   from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Stocks } from '../stocks';
import { Losers } from '../losers';
import { Gainers } from '../gainers';
import { Favorites } from '../favorites';

@Injectable()
export class StockService {

  private stocksUrl = 'http://874791a2.ngrok.io/StocksApp/rest/StocksAPI/getStocks';
  private losersUrl = 'http://874791a2.ngrok.io/StocksApp/rest/StocksAPI/topLosers';
  private gainersUrl = 'http://874791a2.ngrok.io/StocksApp/rest/StocksAPI/topGainers';
  private favoritesUrl = 'http://874791a2.ngrok.io/StocksApp/rest/StocksAPI/getFavorites?userId=';

  
  
 constructor(private http: Http) { }
  
  getStocks(): Observable<Stocks[]> {
  	const headers = new Headers();
    headers.append('access-control-allow-origin', '*');

    return this.http.get(this.stocksUrl, {headers:headers})
    .map(res => res.json());
  }

  getLosers(): Observable<Losers[]> {
  	console.log("test local storage");
  	const headers = new Headers();
  	headers.append('access-control-allow-origin', '*');

  	return this.http.get(this.losersUrl, {headers:headers})
  	.map(res => res.json());

  }

  getGainers(): Observable<Gainers[]> {
  	const headers = new Headers();
  	headers.append('access-control-allow-origin', '*');

  	return this.http.get(this.gainersUrl, {headers:headers})
  	.map(res => res.json());
  }

  getFavorites(): Observable<Favorites[]> {
  	console.log("inside get favorites");
  	console.log(JSON.parse(localStorage.getItem('currentUser')).username);
  	let userId = JSON.parse(localStorage.getItem('currentUser')).userId;
  	let url = this.favoritesUrl+userId;
  	console.log(url);
  	const headers = new Headers();
  	headers.append('access-control-allow-origin', '*');

  	return this.http.get(url, {headers:headers})
  	.map(res => res.json());
  }

  addFav(symbol: string) {
        console.log("inside add fav");
        let userId = JSON.parse(localStorage.getItem('currentUser')).userId;
        let url = "http://874791a2.ngrok.io/StocksApp/rest/StocksAPI/putFavorites?userId=" + userId 
        + "&symbol=" + symbol;
        console.log(url);
        const headers = new Headers();
        headers.append('access-control-allow-origin', '*');
        return this.http.get(url, {headers: headers})
        .map((response: Response) => {
          
        });
    }

   getTrends(stock_id: string) {
   		console.log("inside get trends");
   		let url = "http://874791a2.ngrok.io/StocksApp/rest/StocksAPI/getTrends?symbol="+stock_id;
   		console.log(url);
   		const headers = new Headers();
   		headers.append('access-control-allow-origin', '*');
   		return this.http.get(url, {headers: headers})
        .map((response: Response) => {
          let data = response.json();
          console.log(data);
          localStorage.setItem('trends_data', JSON.stringify(data));
        });

   }

  
}