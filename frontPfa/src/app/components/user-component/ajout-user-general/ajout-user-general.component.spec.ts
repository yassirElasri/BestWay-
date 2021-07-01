import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutUserGeneralComponent } from './ajout-user-general.component';

describe('AjoutUserGeneralComponent', () => {
  let component: AjoutUserGeneralComponent;
  let fixture: ComponentFixture<AjoutUserGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutUserGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutUserGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
