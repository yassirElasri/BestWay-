import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterProduitComComponent } from './ajouter-produit-com.component';

describe('AjouterProduitComComponent', () => {
  let component: AjouterProduitComComponent;
  let fixture: ComponentFixture<AjouterProduitComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterProduitComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterProduitComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
