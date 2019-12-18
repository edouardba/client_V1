import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommitmentService } from '../shared/services/commitment.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-commitment-chart',
  templateUrl: './commitment-chart.component.html',
  styleUrls: ['./commitment-chart.component.css']
})
export class CommitmentChartComponent implements OnInit, OnDestroy {

  constructor(private commitmentService: CommitmentService) { }

  public lineChartOptions = {
    responsive: true,
  };

  public lineChartLabels = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet' , 'Aout' , 'Septembre', 'Octobre', 'Novembre', 'Decembre'];
  public lineChartType = 'line';
  public lineChartLegend = true;
  public lineChartData;

  ngOnInit() {
    this.commitmentService.currentchartUserData.subscribe(res => {
      if(res) {
        this.lineChartData = []
        for(let i = 0; i < res.length; i++) {
          this.lineChartData.push(res[i])
        }
      }

    })
  }

  ngOnDestroy() {
  }

}
