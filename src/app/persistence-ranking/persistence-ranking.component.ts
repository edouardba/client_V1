import { Component, OnInit, Input } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { PersistenceService } from '../shared/services/persistence.service';

@Component({
  selector: 'app-persistence-ranking',
  templateUrl: './persistence-ranking.component.html',
  styleUrls: ['./persistence-ranking.component.css']
})
export class PersistenceRankingComponent implements OnInit {

  constructor(private persistenceService: PersistenceService) { }

  @Input() list;
  page: number = 1;

  ngOnInit() {
  }

  onSelect(item){
    this.persistenceService.changeSelectedUser(item.user)
  }

}
