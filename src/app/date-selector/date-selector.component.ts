import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import * as moment from 'moment';
import { DateSelectorDialogComponent } from '../date-selector-dialog/date-selector-dialog.component';

@Component({
  selector: 'app-date-selector',
  templateUrl: './date-selector.component.html',
  styleUrls: ['./date-selector.component.css']
})
export class DateSelectorComponent implements OnInit {

  constructor(public dialog: MatDialog,) { }

  public period = {type:'monthly'};
  public dateStart;
  public dateEnd;
  public dialogRef;
  @Output() public dateSelected = new EventEmitter();

  ngOnInit() {
    this.startEndDate(this.period)
  }

  startEndDate(res) {

    if (Object.keys(res).length === 0) {
      res = {type: 'monthly'};
    }
    const yesterday = moment().subtract(1, 'days');
    this.period = res;
    if(res.type === 'biweekly') {
      this.dateStart = moment().subtract(14, 'days');
      this.dateEnd = yesterday;
    } else if (res.type === 'daily') {
      this.dateStart = yesterday;
      this.dateEnd = undefined;
    } else if (res.type === 'last_month') {
      this.dateStart = moment().startOf('month').subtract(1, 'months');
      this.dateEnd = yesterday.subtract(1, 'months').endOf('month');
    } else if (res.type === 'last_week') {
      this.dateStart = moment().startOf('isoWeek').subtract(7, 'days');
      this.dateEnd = moment().startOf('isoWeek').subtract(7, 'days').add(6, 'days');
    } else if (res.type === 'monthly') {
      this.dateStart = moment().subtract(30, 'days');
      this.dateEnd = yesterday;
    } else if (res.type === 'this_week') {
      this.dateStart = moment().startOf('isoWeek');
      this.dateEnd = moment();
    } else if (res.type === 'this_month') {
      this.dateStart = moment().startOf('month');
      this.dateEnd = yesterday;
    } else if (res.type === 'weekly') {
      this.dateStart = moment().subtract(7, 'days');
      this.dateEnd = yesterday;
    } else if (res.type === 'year_to_date') {
      this.dateStart = moment().startOf('year');
      this.dateEnd = yesterday;
    } else if (res.from !== undefined) {
      this.dateStart = moment(res.from);
      this.dateEnd = moment(res.to);
    }

    this.dateStart = this.dateStart.format('YYYY-MM-DD');
    if (this.dateEnd !== undefined) {
    this.dateEnd = this.dateEnd.format('YYYY-MM-DD');
    }
    this.dateSelected.emit({from: this.dateStart, to: this.dateEnd, type: res.type})
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {};
    dialogConfig.data.period = this.period.type;
    dialogConfig.data.range = {from: this.dateStart, to: this.dateEnd};

    this.dialogRef = this.dialog.open(DateSelectorDialogComponent, dialogConfig);


    this.dialogRef.afterClosed().subscribe(result => {
      if(result.range !== undefined) {
        this.dateStart = result.range.from;
        this.dateEnd = result.range.to;
        this.period = result.period;
        this.startEndDate({from: this.dateStart, to: this.dateEnd, type: this.period});
      }
    })
  }

}
