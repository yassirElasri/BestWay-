import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTempleteComponent } from './home-templete.component';

describe('HomeTempleteComponent', () => {
  let component: HomeTempleteComponent;
  let fixture: ComponentFixture<HomeTempleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTempleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTempleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
