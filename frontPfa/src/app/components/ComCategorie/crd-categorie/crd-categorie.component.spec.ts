import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrdCategorieComponent } from './crd-categorie.component';

describe('CrdCategorieComponent', () => {
  let component: CrdCategorieComponent;
  let fixture: ComponentFixture<CrdCategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrdCategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrdCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
