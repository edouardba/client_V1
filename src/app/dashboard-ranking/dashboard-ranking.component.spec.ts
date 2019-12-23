import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRankingComponent } from './dashboard-ranking.component';

describe('DashboardRankingComponent', () => {
  let component: DashboardRankingComponent;
  let fixture: ComponentFixture<DashboardRankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardRankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
