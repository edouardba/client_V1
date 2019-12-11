import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-date-selector-dialog',
  templateUrl: './date-selector-dialog.component.html',
  styleUrls: ['./date-selector-dialog.component.css']
})
export class DateSelectorDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DateSelectorDialogComponent>, 
              private datePipe: DatePipe, @Inject(MAT_DIALOG_DATA) 
              public data: any) { }
  
  public showDatepicker = false;
  public period;
  public range;

  ngOnInit() {
    this.range = this.data.range;
    if (this.data.period === undefined) {
      this.period = 'custom';
      this.showDatepicker = true;
    } else {
      this.period = this.data.period;
    }
  }

  getPresetDate(period) {
    console.log('preset period in date selector comp',period)
    this.period = period;
    this.range = this.data.range;
    this.showDatepicker = period === 'custom';
    console.log(period)
  }

  getRangeValue(range) {
    if (range.value !== null) {
      let formatDates = this.formatDates(range);
      this.range.from = formatDates.from;
      this.range.to = formatDates.to;
    } else {
      this.range = undefined;
    }
    console.log(range)
  }

  formatDates(range) {
    return {
      from: this.datePipe.transform(range.value.begin, 'yyyy-MM-dd'),
      to: this.datePipe.transform(range.value.end, 'yyyy-MM-dd')
    };
  }

  onValidate() {
    this.dialogRef.close({range: this.range, period: this.period});
  }

}
