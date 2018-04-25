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
  private favoritesUrl = 'http://874791a2.ngrok.io/StocksApp/rest/StocksAPI/getFavorites?userId=41';
  
 constructor(private http: Http) { }
  
  getStocks(): Observable<Stocks[]> {
  	const headers = new Headers();
    headers.append('access-control-allow-origin', '*');

    return this.http.get(this.stocksUrl, {headers:headers})
    .map(res => res.json());
  }

  getLosers(): Observable<Losers[]> {
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
  	const headers = new Headers();
  	headers.append('access-control-allow-origin', '*');

  	return this.http.get(this.favoritesUrl, {headers:headers})
  	.map(res => res.json());
  }


  
}