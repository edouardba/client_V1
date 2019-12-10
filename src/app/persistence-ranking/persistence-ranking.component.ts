import { Component, OnInit, Input } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-persistence-ranking',
  templateUrl: './persistence-ranking.component.html',
  styleUrls: ['./persistence-ranking.component.css']
})
export class PersistenceRankingComponent implements OnInit {

  constructor() { }

  @Input() ranking;
  page: number = 1;

  ngOnInit() {
    console.log('rankingData get in ranking component', this.ranking)
  }

  onSelect(item){
    console.log(item)
  }

}
