import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { SiblingPeriodService } from '../shared/services/sibling-period.service';

@Component({
  selector: 'app-select-preset-period',
  templateUrl: './select-preset-period.component.html',
  styleUrls: ['./select-preset-period.component.css']
})
export class SelectPresetPeriodComponent implements OnInit {

  constructor(private siblingPeriodService: SiblingPeriodService) { }

  public periodList = {};
  public period;

  @Output() periodPreset = new EventEmitter();
  @Input() periodSelected;

  ngOnInit() {
    this.siblingPeriodService.getSiblingPeriod().subscribe(res => {
      this.periodList = res;
    })
  }

  onPeriodSelect(period) {
    this.periodPreset.emit(period)
  }

}
