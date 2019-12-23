import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-indicators',
  templateUrl: './dashboard-indicators.component.html',
  styleUrls: ['./dashboard-indicators.component.css']
})
export class DashboardIndicatorsComponent implements OnInit {

  constructor() { }

  public indicatorList = [
    {
      score: 82,
      percentage: '20%',
      score_title: 'Quality score',
      icon: 'icon'
    },
    {
      score: 69,
      percentage: '46%',
      score_title: 'Persistence score',
      icon: 'icon'
    },
    {
      score: 37,
      percentage: '52%',
      score_title: 'Global score',
      icon: 'icon'
    },
    {
      score: 48,
      percentage: '77%',
      score_title: 'Evolution score',
      icon: 'icon'
    }
  ]

  ngOnInit() {
  }

}
