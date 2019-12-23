import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { PersistenceService } from '../shared/services/persistence.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-persistence-chart',
  templateUrl: './persistence-chart.component.html',
  styleUrls: ['./persistence-chart.component.css']
})
export class PersistenceChartComponent implements OnInit {

  @Input() public chartData;

  public lineChartOptions = {
    responsive: true,
  };

  public lineChartLabels = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet' , 'Aout' , 'Septembre', 'Octobre', 'Novembre', 'Decembre'];
  public lineChartType = 'line';
  public lineChartLegend = true;

  constructor() { }

  ngOnInit() {}

}
