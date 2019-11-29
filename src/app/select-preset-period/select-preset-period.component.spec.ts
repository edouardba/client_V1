import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPresetPeriodComponent } from './select-preset-period.component';

describe('SelectPresetPeriodComponent', () => {
  let component: SelectPresetPeriodComponent;
  let fixture: ComponentFixture<SelectPresetPeriodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectPresetPeriodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPresetPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
