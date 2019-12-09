import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersistenceChartComponent } from './persistence-chart.component';

describe('PersistenceChartComponent', () => {
  let component: PersistenceChartComponent;
  let fixture: ComponentFixture<PersistenceChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersistenceChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersistenceChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
