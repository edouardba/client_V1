import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersistenceTableComponent } from './persistence-table.component';

describe('PersistenceTableComponent', () => {
  let component: PersistenceTableComponent;
  let fixture: ComponentFixture<PersistenceTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersistenceTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersistenceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
