import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-persistence-ranking',
  templateUrl: './persistence-ranking.component.html',
  styleUrls: ['./persistence-ranking.component.css']
})
export class PersistenceRankingComponent implements OnInit {

  constructor() { }

  @Input() list;
  @Output() valueChange = new EventEmitter();

  ngOnInit() {
  }

  getValue(user) {
    this.valueChange.emit(user)
  }

}
