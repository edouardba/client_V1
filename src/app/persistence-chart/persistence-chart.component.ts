import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { PersistenceService } from '../shared/services/persistence.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-persistence-chart',
  templateUrl: './persistence-chart.component.html',
  styleUrls: ['./persistence-chart.component.css']
})
export class PersistenceChartComponent implements OnInit, OnDestroy {

  public lineChartOptions = {
    responsive: true,
  };

  public lineChartLabels = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet' , 'Aout' , 'Septembre', 'Octobre', 'Novembre', 'Decembre'];
  public lineChartType = 'bar';
  public lineChartLegend = true;
  public lineChartData;
  private currentUserDataSubcription: Subscription;

  constructor(private persistenceService: PersistenceService) { }

  ngOnInit() {
    this.currentUserDataSubcription = this.persistenceService.currentchartUserData.subscribe(res => {
      if(res) {
        this.lineChartData = []
        for(let i = 0; i < res.length; i++) {
          this.lineChartData.push(res[i])
        }
      }

    })
  }

  ngOnDestroy() {
    this.currentUserDataSubcription.unsubscribe();
  }
}
