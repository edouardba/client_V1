import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-score-type',
  templateUrl: './select-score-type.component.html',
  styleUrls: ['./select-score-type.component.css']
})
export class SelectScoreTypeComponent implements OnInit {

  constructor() { }

  public scoreSelected;
  public scoreList = [
    {id: 1, type: 'Quality score'}, 
    {id: 2, type: 'Persistence score'}, 
    {id: 3, type: 'Global score'}, 
    {id: 4, type: 'Evolution score'}
  ]

  ngOnInit() {
  }

  onScoreSelect() {}

}
