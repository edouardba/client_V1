import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-commitment-details',
  templateUrl: './commitment-details.component.html',
  styleUrls: ['./commitment-details.component.css']
})
export class CommitmentDetailsComponent implements OnInit {

  @Input() details

  constructor() { }

  ngOnInit() {
  }

}
