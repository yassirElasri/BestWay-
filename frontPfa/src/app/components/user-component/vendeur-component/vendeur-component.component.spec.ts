import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendeurComponentComponent } from './vendeur-component.component';

describe('VendeurComponentComponent', () => {
  let component: VendeurComponentComponent;
  let fixture: ComponentFixture<VendeurComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendeurComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendeurComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
