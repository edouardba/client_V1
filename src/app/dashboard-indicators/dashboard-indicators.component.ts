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
      score: 82,
      percentage: '20%',
      score_title: 'Quality score',
      icon: 'icon'
    },
    {
      score: 82,
      percentage: '20%',
      score_title: 'Quality score',
      icon: 'icon'
    },
    {
      score: 82,
      percentage: '20%',
      score_title: 'Quality score',
      icon: 'icon'
    }
  ]

  ngOnInit() {
  }

}
