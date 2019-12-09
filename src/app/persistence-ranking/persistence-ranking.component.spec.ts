import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersistenceRankingComponent } from './persistence-ranking.component';

describe('PersistenceRankingComponent', () => {
  let component: PersistenceRankingComponent;
  let fixture: ComponentFixture<PersistenceRankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersistenceRankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersistenceRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
