import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingSelectorComponent } from './ranking-selector.component';

describe('RankingSelectorComponent', () => {
  let component: RankingSelectorComponent;
  let fixture: ComponentFixture<RankingSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankingSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
