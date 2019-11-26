import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-rankings',
  templateUrl: './dashboard-rankings.component.html',
  styleUrls: ['./dashboard-rankings.component.css']
})
export class DashboardRankingsComponent implements OnInit {

  constructor() { }

  public titleList = [
    {
      title: 'Quality score',
    },
    {
      title: 'Persistence score',
    },
    {
      title: 'Global score',
    },
    {
      title: 'Evolution score',
    }
  ]

  ngOnInit() {
  }

}
