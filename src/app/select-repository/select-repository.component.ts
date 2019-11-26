import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-repository',
  templateUrl: './select-repository.component.html',
  styleUrls: ['./select-repository.component.css']
})
export class SelectRepositoryComponent implements OnInit {

  constructor() { }

  public repositorySelected;
  public repositoryList = [
    {id: 1, name: 'clientV1'}, 
    {id: 2, name: 'clientV2'}, 
    {id: 3, name: 'adloop'}, 
    {id: 4, name: 'capistrano'}
  ]

  ngOnInit() {
  }

  onRepositorySelect() {}

}
