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
  
  public dataRanking;

  // public dataRanking = [
  //   {rank: 1, name: 'Christopher', position: 'Back-end Developer'},
  //   {rank: 2, name: 'Quentin', position: 'Back-end Developer'},
  //   {rank: 3, name: 'Timothé', position: 'Back-end Developer'},
  //   {rank: 4, name: 'Nicolas', position: 'Back-end Developer'},
  //   {rank: 5, name: 'Jonathan', position: 'Back-end Developer'},
  //   {rank: 6, name: 'Edouard', position: 'Front-end Developer'},
  // ]


  public dataTable = [
    {name: 'Added ratio', characters_number: '1235', persistence_score: 84},
    {name: 'Fix trad en', characters_number: '34687', persistence_score: 82},
    {name: 'Resolve conflict', characters_number: '897', persistence_score: 82},
    {name: 'Adding new tracking template to facebook API', characters_number: '3453', persistence_score: 77},
    {name: 'Update affiliate_table.rb', characters_number: '81948', persistence_score: 72},
    {name: 'Fixed transaction details', characters_number: '3578', persistence_score: 69},
    {name: 'Fixed transaction mapping in GA ', characters_number: '613', persistence_score: 66},
    {name: 'Added conversion path filter', characters_number: '1456', persistence_score: 65},
    {name: 'Set transaction id to nil if empty', characters_number: '568', persistence_score: 64},
    {name: 'Refactoring', characters_number: '2398', persistence_score: 51},
  ];

  displayedColumns: string[] = ['name', 'characters_number', 'persistence_score'];
  dataSource = new MatTableDataSource(this.dataTable);


  ngOnInit() {
    this.persistenceService.getData().subscribe(res => {
      console.log('res', res.ranking)
      this.dataRanking = res.ranking
    })

  }


}
