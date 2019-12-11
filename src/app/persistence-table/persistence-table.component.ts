import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-persistence-table',
  templateUrl: './persistence-table.component.html',
  styleUrls: ['./persistence-table.component.css']
})
export class PersistenceTableComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
  constructor(breakpointObserver: BreakpointObserver) { 
    breakpointObserver.observe(['(max-width: 900px)']).subscribe(result => {
      this.displayedColumns = result.matches ? 
          ['commit_name', 'characters_number'] : 
          ['commit_name', 'characters_number', 'score'];
    });
  }

  @Input() displayedColumns: string[];
  @Input() dataSource;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
