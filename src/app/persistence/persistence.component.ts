import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { PersistenceService } from '../shared/services/persistence.service';
import { Subscription } from 'rxjs';
import { ContextService } from '../shared/services/context.service';

@Component({
  selector: 'app-persistence',
  templateUrl: './persistence.component.html',
  styleUrls: ['./persistence.component.css']
})
export class PersistenceComponent implements OnInit, OnDestroy {

  constructor(private persistenceService: PersistenceService) { }

  public rankingList;
  public selectedUser;
  private rankingListSubscription: Subscription;
  private currentUserSelectedSubscription: Subscription;
  private detailsByUserIdSubcription: Subscription;
  private chartByUserIdSubcription: Subscription;


  public displayedColumns: string[] = ['commit_name', 'characters_number', 'score'];
  public dataSource = new MatTableDataSource();

  ngOnInit() {
    this.getRankingList();
  }

  getRankingList() {
    this.rankingListSubscription = this.persistenceService.getRankingList().subscribe(res => {
      this.rankingList = res.ranking
    })
  }

  getCurrentUserSelected(user) {
    if(user) {
      this.selectedUser = user;
      this.getUserDetails();
      this.getChartData();
    }
  }

  getUserDetails() {
    this.detailsByUserIdSubcription = this.persistenceService.getDetailsByUserId(this.selectedUser.id).subscribe(res => {
      this.dataSource = new MatTableDataSource(res.details);
    })
  }

  getChartData() {
    this.chartByUserIdSubcription = this.persistenceService.getChartDataByUserId(this.selectedUser.id).subscribe(res => {
      if(res) {
        this.persistenceService.changeChartUserData(res.datasets);
      }
    })
  }

  getPresetDate(periodSelected) {
    console.log('periodSelected',periodSelected)
  }

  ngOnDestroy() {
    if(this.rankingListSubscription) {
      this.rankingListSubscription.unsubscribe();
    }
    if(this.currentUserSelectedSubscription) {
      this.currentUserSelectedSubscription.unsubscribe();
    }
    if(this.detailsByUserIdSubcription) {
      this.detailsByUserIdSubcription.unsubscribe()
    }
    if(this.chartByUserIdSubcription) {
      this.chartByUserIdSubcription.unsubscribe();
    }
  }

}
