import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commitment',
  templateUrl: './commitment.component.html',
  styleUrls: ['./commitment.component.css']
})
export class CommitmentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getPresetDate(period) {
    console.log(period)
  }

}
