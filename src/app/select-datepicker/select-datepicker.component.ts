import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import {FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select-datepicker',
  templateUrl: './select-datepicker.component.html',
  styleUrls: ['./select-datepicker.component.css']
})
export class SelectDatepickerComponent implements OnInit {

  myGroup: FormGroup;

  constructor(private fb: FormBuilder) { }

  @Output() valueRange = new EventEmitter();
  @Input() rangeSelected;

  ngOnInit() {
    this.createForm();
  }

    createForm() {
    this.myGroup = this.fb.group({
      date: {
        begin: this.rangeSelected.from,
        end: this.rangeSelected.to
      }
    });
  }

  onSelect(range) {
    this.valueRange.emit(range);
  }

}
