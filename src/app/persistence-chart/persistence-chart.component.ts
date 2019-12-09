import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persistence-chart',
  templateUrl: './persistence-chart.component.html',
  styleUrls: ['./persistence-chart.component.css']
})
export class PersistenceChartComponent implements OnInit {

  public lineChartOptions = {
    responsive: true,
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
