import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDeveloperComponent } from './select-developer.component';

describe('SelectDeveloperComponent', () => {
  let component: SelectDeveloperComponent;
  let fixture: ComponentFixture<SelectDeveloperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectDeveloperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
