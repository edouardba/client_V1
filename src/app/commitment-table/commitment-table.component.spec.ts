import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitmentTableComponent } from './commitment-table.component';

describe('CommitmentTableComponent', () => {
  let component: CommitmentTableComponent;
  let fixture: ComponentFixture<CommitmentTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommitmentTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitmentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
