import { Component, OnInit } from '@angular/core';
import { RankingSelectorService } from '../shared/services/ranking-selector.service';

@Component({
  selector: 'app-ranking-selector',
  templateUrl: './ranking-selector.component.html',
  styleUrls: ['./ranking-selector.component.css']
})
export class RankingSelectorComponent implements OnInit {

  constructor(private rankingSelectorService: RankingSelectorService) { }

  public rankingList;

  ngOnInit() {
    this.rankingSelectorService.currentRankingList.subscribe(res => {
      if(res) {
        this.rankingList = res;
        console.log('this.rankingList', this.rankingList)
      }
    })
  }

}
