import { Component, OnInit } from '@angular/core';
import {MatTableModule, MatToolbarModule} from '@angular/material';
import { Stocks } from '../stocks';
import { Losers } from '../losers';
import { Gainers } from '../gainers';
import { Favorites } from '../favorites';
import { UserService } from '../services/user.service';
import { StockService } from '../services/stocks.service';
import {MatTableDataSource} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {DataSource} from '@angular/cdk/collections';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public searchString: string;

  count: number;

  idArr = [];

  public isVisible:boolean = true;
  displayedColumns = ['symbol', 'stock_id', 'dt', 'opening','high', 'low','closing','volume', 'actions', 'trends'];
  dataSource = new MatTableDataSource();

  username = JSON.parse(localStorage.getItem('currentUser')).username;

  ngOnInit() {

    this.stockService.getStocks().subscribe(
    data => {
    this.dataSource.data = data;
    }
    );

  }


  getCount(){
  this.stockService.getCount()
  .subscribe(data => {
  console.log(data);
  this.count = data;
  })
  }

  contains(id){
    return this.idArr.indexOf(id) == -1;
  }
  addFav(e){
    this.idArr.push(e.stock_id);
    //localStorage.setItem('id_list',id_arr);
    this.isVisible = !this.isVisible;
    console.log("Clicked Follow button for:");
    console.log(e);
    this.stockService.addFav(e.stock_id)
        .subscribe();
  }

  getTrends(e){
    console.log(e);
    localStorage.setItem('company_name', e.symbol);
    this.stockService.getTrends(e.stock_id)
    .subscribe(status => {
        console.log("Inside subscribe");
        this.router.navigate(['graph']);
    });
    
  }
  

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  constructor(private router: Router, private stockService : StockService) { }

  fav_columns = ['stockName', 'price', 'change'];
  favSource = new FavoritesDataSource(this.stockService);

  gainers_columns = ['company','stockPrice'];
  gainersSource = new GainersDataSource(this.stockService);

  losers_columns = ['company','stockPrice'];
  losersSource = new LosersDataSource(this.stockService);
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

export class FavoritesDataSource extends DataSource<any> {
  constructor(private stockService: StockService) {
    super();
  }
  connect(): Observable<Favorites[]> {
    return this.stockService.getFavorites();
  }
  disconnect() {}
}




