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
    {id: 1, name: 'All user'}, 
    {id: 2, name: 'Christopher'}, 
    {id: 3, name: 'Quentin'}, 
    {id: 4, name: 'Edouard'}
  ]

  ngOnInit() {
  }

  onUserSelect() {}

}
