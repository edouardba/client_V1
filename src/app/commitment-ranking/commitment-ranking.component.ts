import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-commitment-ranking',
  templateUrl: './commitment-ranking.component.html',
  styleUrls: ['./commitment-ranking.component.css']
})
export class CommitmentRankingComponent implements OnInit {

  constructor() { }

  @Input() list;
  @Output() valueChange = new EventEmitter();

  ngOnInit() {
  }

  getValue(user) {
    this.valueChange.emit(user)
  }

}
