import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectRepositoryComponent } from './select-repository.component';

describe('SelectRepositoryComponent', () => {
  let component: SelectRepositoryComponent;
  let fixture: ComponentFixture<SelectRepositoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectRepositoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectRepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
