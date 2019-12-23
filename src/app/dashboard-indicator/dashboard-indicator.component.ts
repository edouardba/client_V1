import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-indicator',
  templateUrl: './dashboard-indicator.component.html',
  styleUrls: ['./dashboard-indicator.component.css']
})
export class DashboardIndicatorComponent implements OnInit {

  @Input() public data;

  constructor() { }
  
  ngOnInit() {
  }

}
