import { Component, OnInit, Input } from '@angular/core';
import { PersistenceService } from '../shared/services/persistence.service';

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
  public lineChartData;

  constructor(private persistenceService: PersistenceService) { }

  ngOnInit() {
    this.persistenceService.currentchartUserData.subscribe(res => {
      if(res) {
        this.lineChartData = []
        for(let i = 0; i < res.length; i++) {
          this.lineChartData.push(res[i])
        }
        console.log(this.lineChartData)
      }

    })
  }


}
