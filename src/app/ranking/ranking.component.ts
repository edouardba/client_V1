import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ContextService } from '../shared/services/context.service';
import { PersistenceService } from '../shared/services/persistence.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  constructor(private persistenceService: PersistenceService) { }

  @Input() data;
  @Output() valueChange = new EventEmitter();
  page: number = 1;

  ngOnInit() {
  }

  onSelect(item){
    this.valueChange.emit(item.user)
  }

}
