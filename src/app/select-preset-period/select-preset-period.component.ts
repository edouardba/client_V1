import { Component, OnInit, Output, Input, EventEmitter, OnDestroy } from '@angular/core';
import { SiblingPeriodService } from '../shared/services/sibling-period.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-select-preset-period',
  templateUrl: './select-preset-period.component.html',
  styleUrls: ['./select-preset-period.component.css']
})
export class SelectPresetPeriodComponent implements OnInit, OnDestroy {

  constructor(private siblingPeriodService: SiblingPeriodService) { }

  public periodList = {};
  public period;
  private siblingPeriodSubcription: Subscription;

  @Output() periodPreset = new EventEmitter();
  @Input() periodSelected;

  ngOnInit() {
    this.siblingPeriodSubcription = this.siblingPeriodService.getSiblingPeriod().subscribe(res => {
      this.periodList = res;
    })
  }

  onPeriodSelect(period) {
    this.periodPreset.emit(period)
  }

  ngOnDestroy() {
    if(this.siblingPeriodSubcription) {
      this.siblingPeriodSubcription.unsubscribe();
    }
  }

}
