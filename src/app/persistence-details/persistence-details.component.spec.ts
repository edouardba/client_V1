import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersistenceDetailsComponent } from './persistence-details.component';

describe('PersistenceDetailsComponent', () => {
  let component: PersistenceDetailsComponent;
  let fixture: ComponentFixture<PersistenceDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersistenceDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersistenceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
