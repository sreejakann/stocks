import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatTableModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { StockService } from './services/stocks.service';
import {DataSource} from '@angular/cdk/collections';
import { FilterPipe } from './pipes/filter.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



import {
  MatAutocompleteModule,
  MatFormFieldModule,
  MatCardModule,
  MatSelectModule,
  MatInputModule,
  MatTabsModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { GraphComponent } from './graph/graph.component';

import { FlexLayoutModule } from '@angular/flex-layout';

import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';

import { FusionChartsModule } from 'angular4-fusioncharts';

export const router: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'graph', component: GraphComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
   ];

FusionChartsModule.fcRoot(FusionCharts, Charts, FintTheme);
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    GraphComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatTabsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FusionChartsModule.forRoot(FusionCharts, Charts, FintTheme),
    RouterModule.forRoot(
      router,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
  UserService,
  StockService
  ],
  exports: [
    FilterPipe
  ],
  bootstrap: [
  AppComponent,
  HomeComponent,
  LoginComponent
  ]
})
export class AppModule { }
