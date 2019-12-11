import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { PersistenceService } from '../shared/services/persistence.service';

@Component({
  selector: 'app-persistence',
  templateUrl: './persistence.component.html',
  styleUrls: ['./persistence.component.css']
})
export class PersistenceComponent implements OnInit {

  constructor(private persistenceService: PersistenceService) { }

  public rankingList;
  public selectedUser;

  public displayedColumns: string[] = ['commit_name', 'characters_number', 'score'];
  public dataSource = new MatTableDataSource();

  ngOnInit() {
    this.getRankingList();
    this.getCurrentUserSelected();
  }

  getRankingList() {
    this.persistenceService.getRankingList().subscribe(res => {
      this.rankingList = res.ranking
    })
  }

  getCurrentUserSelected() {
    this.persistenceService.currentUserSelected.subscribe(res => {
      if (res) {
        console.log('this.selectedUser', this.selectedUser)
        this.selectedUser = res;
        this.getUserDetails()
        this.getChartData()
      }
    })
  }

  getUserDetails() {
    this.persistenceService.getDetailsByUserId(this.selectedUser.id).subscribe(res => {
      this.dataSource = new MatTableDataSource(res.details);
    })
  }

  getChartData() {
    this.persistenceService.getChartDataByUserId(this.selectedUser.id).subscribe(res => {
      if(res) {
        this.persistenceService.changeChartUserData(res.datasets);
      }
    })
  }

  getPresetDate(periodSelected) {
    console.log('periodSelected',periodSelected)
  }

}
