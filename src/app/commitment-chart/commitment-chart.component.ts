import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-commitment-chart',
  templateUrl: './commitment-chart.component.html',
  styleUrls: ['./commitment-chart.component.css']
})
export class CommitmentChartComponent implements OnInit {

  constructor() { }

  @Input() public chartData;

  public lineChartOptions = {
    responsive: true,
  };

  public lineChartLabels = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet' , 'Aout' , 'Septembre', 'Octobre', 'Novembre', 'Decembre'];
  public lineChartType = 'line';
  public lineChartLegend = true;

  ngOnInit() {
  }

}
