import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectScoreTypeComponent } from './select-score-type.component';

describe('SelectScoreTypeComponent', () => {
  let component: SelectScoreTypeComponent;
  let fixture: ComponentFixture<SelectScoreTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectScoreTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectScoreTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
