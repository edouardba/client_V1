import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceRankingComponent } from './performance-ranking.component';

describe('PerformanceRankingComponent', () => {
  let component: PerformanceRankingComponent;
  let fixture: ComponentFixture<PerformanceRankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformanceRankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
