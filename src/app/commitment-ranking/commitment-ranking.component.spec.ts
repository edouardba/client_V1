import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitmentRankingComponent } from './commitment-ranking.component';

describe('CommitmentRankingComponent', () => {
  let component: CommitmentRankingComponent;
  let fixture: ComponentFixture<CommitmentRankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommitmentRankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitmentRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
