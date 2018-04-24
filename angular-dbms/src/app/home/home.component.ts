import { Component, OnInit } from '@angular/core';
import {MatTableModule, MatToolbarModule} from '@angular/material';
import { Stocks } from '../stocks';
import { Losers } from '../losers';
import { Gainers } from '../gainers';
import { UserService } from '../services/user.service';
import { StockService } from '../services/stocks.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {DataSource} from '@angular/cdk/collections';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  

  ngOnInit() {
  }

  displayedColumns = ['stock_id', 'dt', 'opening','high', 'low','closing','volume', 'symbol'];
  dataSource = new StocksDataSource(this.stockService);
  

  constructor(private stockService : StockService) { }

  rec_columns = ['company','closing','change'];
  recSource = rec_data;

  fav_columns = ['company', 'closing', 'performance'];
  favSource = fav_data;

  gainers_columns = ['company','stockPrice'];
  gainersSource = new GainersDataSource(this.stockService);

  losers_columns = ['company','stockPrice'];
  losersSource = new LosersDataSource(this.stockService);
}

export class StocksDataSource extends DataSource<any> {
  constructor(private stockService: StockService) {
    super();
  }
  connect(): Observable<Stocks[]> {
    return this.stockService.getStocks();
  }
  disconnect() {}
}

export class LosersDataSource extends DataSource<any> {
  constructor(private stockService: StockService) {
    super();
  }
  connect(): Observable<Losers[]> {
    return this.stockService.getLosers();
  }
  disconnect() {}
}

export class GainersDataSource extends DataSource<any> {
  constructor(private stockService: StockService) {
    super();
  }
  connect(): Observable<Gainers[]> {
    return this.stockService.getGainers();
  }
  disconnect() {}
}


export interface recommendation {
  company: string;
  closing: number;
  change: number;
}

const rec_data: recommendation[] = [
  {company: 'Audible', closing: 1.0079, change: 2},
  {company: 'Audible', closing: 1.0079, change: 2},
  {company: 'Audible', closing: 1.0079, change: 2},
  {company: 'Audible', closing: 1.0079, change: 2},
];

export interface favorites {
  company: string;
  closing: number;
  performance: string;
}

const fav_data: favorites[] = [
  {company: 'Audible', closing: 1.0079, performance: 'good'},
  {company: 'Google', closing: 1.0079, performance: 'good'},
  {company: 'Dell', closing: 1.0079, performance: 'good'},
  {company: 'facebook', closing: 1.0079, performance: 'good'},
];


export interface gainers {
  company: string;
  stockPrice: number;
}

const losers_data: gainers[] = [
  {company: 'Audible', stockPrice: 1.0079},
  {company: 'Audible', stockPrice: 1.0079},
  {company: 'Audible', stockPrice: 1.0079},
  {company: 'Audible', stockPrice: 1.0079},
];