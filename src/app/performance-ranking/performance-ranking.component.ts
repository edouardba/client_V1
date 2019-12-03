import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-performance-ranking',
  templateUrl: './performance-ranking.component.html',
  styleUrls: ['./performance-ranking.component.css']
})
export class PerformanceRankingComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public data = [
    {rank: 1, name: 'Christopher', position: 'Back-end Developer', score: 84, evolution: ''},
    {rank: 2, name: 'Quentin', position: 'Back-end Developer', score: 82, evolution:''},
    {rank: 3, name: 'Jonathan', position: 'Back-end Developer', score: 82, evolution: ''},
    {rank: 4, name: 'Timothé', position: 'Front-end Developer', score: 77, evolution: ''},
    {rank: 5, name: 'Nicolas', position: 'Back-end Developer', score: 72, evolution: ''},
    {rank: 6, name: 'Edouard', position: 'Front-end Developer', score: 69, evolution: ''},
    {rank: 7, name: 'Maxime', position: 'Front-end Developer', score: 66, evolution: ''},
    {rank: 8, name: 'Féréol', position: 'Front-end Developer', score: 65, evolution: ''},
    {rank: 9, name: 'Audrey', position: 'Back-end Developer', score: 64, evolution: ''},
    {rank: 10, name: 'Stéphane', position: 'Back-end Developer', score: 51, evolution: ''},
  ];

  displayedColumns: string[] = ['rank', 'name', 'position', 'score', 'evolution'];
  dataSource = new MatTableDataSource(this.data);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getDateSelected(date) {
    console.log("date selected in performance ranking component", date)
  }

}
