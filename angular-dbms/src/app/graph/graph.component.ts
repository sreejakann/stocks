import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

	id = 'chart1';
    width = 600;
    height = 400;
    type = 'line';
    dataFormat = 'json';
    dataSource;
    title = 'Angular4 FusionCharts Sample';
    
    username = JSON.parse(localStorage.getItem('currentUser')).username;
    comp_title = "Trends for "+localStorage.getItem('company_name');

    constructor() {
    	console.log("test comp name");
    	console.log(localStorage.getItem('company_name'));
        this.dataSource = {
            "chart": {
                "caption": this.comp_title,
                "numberprefix": "$",
                "theme": "fint",
                "showValues": "0",
                "drawAnchors": "0"
            },
            
            "data": JSON.parse(localStorage.getItem('trends_data'))
        }

        console.log(this.dataSource);
    }



  ngOnInit() {
  }

}
