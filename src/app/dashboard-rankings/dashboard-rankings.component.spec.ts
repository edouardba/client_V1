import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRankingsComponent } from './dashboard-rankings.component';

describe('DashboardRankingsComponent', () => {
  let component: DashboardRankingsComponent;
  let fixture: ComponentFixture<DashboardRankingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardRankingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardRankingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
