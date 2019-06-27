import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideofinalComponent } from './videofinal.component';

describe('VideofinalComponent', () => {
  let component: VideofinalComponent;
  let fixture: ComponentFixture<VideofinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideofinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideofinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
