import { Component, OnInit, Input } from '@angular/core';
import { RankingSelectorService } from '../shared/services/ranking-selector.service';

@Component({
  selector: 'app-dashboard-ranking',
  templateUrl: './dashboard-ranking.component.html',
  styleUrls: ['./dashboard-ranking.component.css']
})
export class DashboardRankingComponent implements OnInit {

  constructor(private rankingSelectorService: RankingSelectorService) { }

  @Input() public data;
  public showRankingTop: boolean = false;
  public showRankingFlop: boolean = false;

  ngOnInit() {
    this.showRankingTop = true;
  }

  public fakeTopRankingData = [
    {id: 1, name: 'Christopher', position: 'Back-end Developer', score:'92'},
    {id: 2, name: 'Timothé', position: 'Back-end Developer', score:'84'},
    {id: 3, name: 'Quentin', position: 'Front-end Developer', score:'84'},
  ]

  public fakeFlopRankingData = [
    {id: 1, name: 'Maxime', position: 'Front-end Developer', score:'92'},
    {id: 2, name: 'Audrey', position: 'Back-end Developer', score:'84'},
    {id: 3, name: 'Féréol', position: 'Front-end Developer', score:'84'},
  ]

  toggleTopRanking() {
    this.showRankingTop = true;
    if(this.showRankingTop == true) {
      this.showRankingFlop = false;
      this.rankingSelectorService.changeRankingList(this.fakeTopRankingData)
    }
  }

  toggleFlopRanking() {
    this.showRankingFlop = true;
    if(this.showRankingFlop == true) {
      this.showRankingTop = false;
      this.rankingSelectorService.changeRankingList(this.fakeFlopRankingData)
    }
  }

}
