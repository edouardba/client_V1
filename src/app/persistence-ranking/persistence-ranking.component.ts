import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-persistence-ranking',
  templateUrl: './persistence-ranking.component.html',
  styleUrls: ['./persistence-ranking.component.css']
})
export class PersistenceRankingComponent implements OnInit {

  constructor() { }

  @Input() ranking;

  ngOnInit() {
  }

}
