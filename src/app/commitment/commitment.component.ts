import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommitmentService } from '../shared/services/commitment.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-commitment',
  templateUrl: './commitment.component.html',
  styleUrls: ['./commitment.component.css']
})
export class CommitmentComponent implements OnInit, OnDestroy {

  constructor(private commitmentService: CommitmentService) { }

  public rankingList;
  public selectedUser;
  public details;
  private rankingListSubscription: Subscription;
  private detailsByUserIdSubcription: Subscription;
  private chartByUserIdSubcription: Subscription;

  ngOnInit() {
    this.getRankingList();
  }

  getRankingList() {
    this.rankingListSubscription = this.commitmentService.getRankingList().subscribe(res => {
      this.rankingList = res.ranking
    })
  }

  getCurrentUserSelected(user) {
    if(user) {
      this.selectedUser = user;
      this.getUserDetails();
      this.getChartData()
    }
  }

  getUserDetails() {
    this.detailsByUserIdSubcription = this.commitmentService.getDetailsByUserId(this.selectedUser.id).subscribe(res => {
      this.details = res.details;
    })
  }

  getChartData() {
    this.chartByUserIdSubcription = this.commitmentService.getChartDataByUserId(this.selectedUser.id).subscribe(res => {
      if(res) {
        this.commitmentService.changeChartUserData(res.datasets);
      }
    })
  }

  getPresetDate(period) {
    console.log(period)
  }

  ngOnDestroy() {
    if(this.rankingListSubscription) {
      this.rankingListSubscription.unsubscribe();
    }
    if(this.detailsByUserIdSubcription) {
      this.detailsByUserIdSubcription.unsubscribe();
    }
    if(this.chartByUserIdSubcription) {
      this.chartByUserIdSubcription.unsubscribe();
    }
  }

}
