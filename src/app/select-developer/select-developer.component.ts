import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-developer',
  templateUrl: './select-developer.component.html',
  styleUrls: ['./select-developer.component.css']
})
export class SelectDeveloperComponent implements OnInit {

  constructor() { }

  public userSelected;
  public userList = [
    {id: 1, name: 'clientV1'}, 
    {id: 2, name: 'clientV2'}, 
    {id: 3, name: 'adloop'}, 
    {id: 4, name: 'capistrano'}
  ]

  ngOnInit() {
  }

  onUserSelect() {}

}
