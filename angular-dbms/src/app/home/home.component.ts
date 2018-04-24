import { Component, OnInit } from '@angular/core';
import {MatTableModule, MatToolbarModule} from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayedColumns = ['stock_id', 'dt', 'opening','high', 'low','closing','volume', 'symbol'];
  dataSource = ELEMENT_DATA;

  rec_columns = ['company','closing','change'];
  recSource = rec_data;

  fav_columns = ['company', 'closing', 'performance'];
  favSource = fav_data;

  gainers_columns = ['company','closing','change'];
  gainersSource = gainers_data;

  losers_columns = ['company','closing','change'];
  losersSource = losers_data;
}


export interface Element {
  dt: string;
  stock_id: number;
  opening: number;
  symbol: string;
  high: number;
  low: number;
  closing: number;
  volume: number;
}

const ELEMENT_DATA: Element[] = [
  {stock_id: 1, dt: '08-02-15', opening: 1.0079, high: 1.0079, low: 1.0079,closing: 1.0079, volume: 2, symbol: 'H'},
  {stock_id: 2, dt: '07-05-15', opening: 4.0026,high: 1.0079,low: 1.0079,closing: 1.0079,volume: 2, symbol: 'He'},
  {stock_id: 3, dt: '18-12-17', opening: 6.941,high: 1.0079, low: 1.0079,closing: 1.0079,volume: 2,symbol: 'Li'},
  {stock_id: 4, dt: '18-12-17', opening: 9.0122,high: 1.0079,low: 1.0079, closing: 1.0079,volume: 2,symbol: 'Be'},
  {stock_id: 5, dt: '07-05-15', opening: 10.811, high: 1.0079,low: 1.0079,closing: 1.0079,volume: 2,symbol: 'B'},
  {stock_id: 6, dt: '08-02-15', opening: 12.0107,high: 1.0079, low: 1.0079,closing: 1.0079,volume: 2,symbol: 'C'},
  {stock_id: 7, dt: '18-12-17', opening: 14.0067,high: 1.0079,low: 1.0079,closing: 1.0079, volume: 2,symbol: 'N'},
  {stock_id: 8, dt: '07-05-15', opening: 15.9994, high: 1.0079,low: 1.0079,closing: 1.0079,volume: 2,symbol: 'O'},
  {stock_id: 9, dt: '18-12-17', opening: 18.9984,high: 1.0079, low: 1.0079,closing: 1.0079,volume: 2,symbol: 'F'},
  {stock_id: 10, dt: '08-02-15', opening: 20.1797,high: 1.0079, low: 1.0079,closing: 1.0079,volume: 2,symbol: 'Ne'},
];

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
  closing: number;
  change: number;
}

const gainers_data: gainers[] = [
  {company: 'Audible', closing: 1.0079, change: 2},
  {company: 'Google', closing: 1.0079, change: 2},
  {company: 'Amazon', closing: 1.0079, change: 2},
  {company: 'Facebook', closing: 1.0079, change: 2},
];

export interface losers {
  company: string;
  closing: number;
  change: number;
}

const losers_data: losers[] = [
  {company: 'Audible', closing: 1.0079, change: 2},
  {company: 'Audible', closing: 1.0079, change: 2},
  {company: 'Audible', closing: 1.0079, change: 2},
  {company: 'Audible', closing: 1.0079, change: 2},
];