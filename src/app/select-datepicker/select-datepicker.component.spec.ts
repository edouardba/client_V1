import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDatepickerComponent } from './select-datepicker.component';

describe('SelectDatepickerComponent', () => {
  let component: SelectDatepickerComponent;
  let fixture: ComponentFixture<SelectDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
