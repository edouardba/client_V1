import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-project',
  templateUrl: './select-project.component.html',
  styleUrls: ['./select-project.component.css']
})
export class SelectProjectComponent implements OnInit {

  constructor() { }

  public projectSelected;
  public projectList = [
    {id: 1, name: 'clientV1'}, 
    {id: 2, name: 'clientV2'}, 
    {id: 3, name: 'adloop'}, 
    {id: 4, name: 'capistrano'}
  ]

  ngOnInit() {
  }

  onProjectSelect() {}

}
