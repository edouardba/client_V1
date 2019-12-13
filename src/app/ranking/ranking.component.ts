import { Component, OnInit, Input } from '@angular/core';
import { PersistenceService } from '../shared/services/persistence.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  constructor(private persistenceService: PersistenceService) { }

  @Input() data;
  page: number = 1;

  ngOnInit() {
  }

  onSelect(item){
    this.persistenceService.changeSelectedUser(item.user)
  }

}
