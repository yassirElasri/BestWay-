import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserGeneralComponent } from './update-user-general.component';

describe('UpdateUserGeneralComponent', () => {
  let component: UpdateUserGeneralComponent;
  let fixture: ComponentFixture<UpdateUserGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateUserGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUserGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
