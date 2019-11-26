import { Component, OnInit } from '@angular/core';
import { Label, Color } from 'ng2-charts';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-dashboard-chart',
  templateUrl: './dashboard-chart.component.html',
  styleUrls: ['./dashboard-chart.component.css']
})
export class DashboardChartComponent implements OnInit {

  public lineChartOptions = {
    responsive: true
  };

  public lineChartLabels = ['2001', '2002', '2003', '2004', '2005'];
  public lineChartType = 'line';
  public lineChartLegend = true;

  public lineChartData = [
    {data: [65, 59, 76, 98, 34], label: 'quality score'},
    {data: [32, 12, 45, 76, 23], label: 'persistence score'},
    {data: [6, 30, 5, 24, 9], label: 'global score'},
    {data: [22, 46, 20, 32, 12], label: 'evolution score'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
