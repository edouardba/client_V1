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

  constructor(private persistenceService: PersistenceService, private contextService: ContextService) { }

  public rankingList;
  public selectedUser;
  public chartData;
  public repository_id;
  public period;
  public params = {
    "repository_id": null,
    "report_type": "pers",
    "period": null, 
  }
  private rankingListSubscription: Subscription;
  private detailsByUserIdSubcription: Subscription;
  private chartByUserIdSubcription: Subscription;


  public displayedColumns: string[] = ['commit_name', 'chars_count', 'score'];
  public dataSource = new MatTableDataSource();

  ngOnInit() {
    this.getRankingList();
    // this.contextService.currentRepositoryId.subscribe(res => {
    //   this.repository_id = res;
    //   console.log('this.repositoryId', this.repository_id)
    // })
  }

  // getReport(persistence_id, instance) {
  //   this.persistenceService.getReport(this.repository_id, persistence_id).subscribe(res => {
  //     if(res.status == 'wait') {
  //       setTimeout(function () {
  //         instance.getReport(persistence_id, instance);
  //       }, 3000);
  //     } else {
  //       if(res.status == 'error') {
  //         console.log('error')
  //       } else {
  //         this.rankingList = res.ranking;
  //         this.dataSource = new MatTableDataSource(res.details);
  //         this.chartData = res.datasets;
  //       }
  //     }
  //   })
  // }

  getRankingList() {
    this.rankingListSubscription = this.persistenceService.getRankingList().subscribe(res => {
      this.rankingList = res.ranking
    })
  }

  onChangeUser(user) {
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
      this.chartData = res.datasets;
    })
  }

  getPresetDate(periodSelected) {
    this.period
    console.log('periodSelected',periodSelected)
  }

  ngOnDestroy() {
    if(this.rankingListSubscription) {
      this.rankingListSubscription.unsubscribe();
    }
    if(this.detailsByUserIdSubcription) {
      this.detailsByUserIdSubcription.unsubscribe()
    }
    if(this.chartByUserIdSubcription) {
      this.chartByUserIdSubcription.unsubscribe();
    }
  }

}
