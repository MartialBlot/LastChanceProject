import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Videotransit3Component } from './videotransit3.component';

describe('Videotransit3Component', () => {
  let component: Videotransit3Component;
  let fixture: ComponentFixture<Videotransit3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Videotransit3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Videotransit3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
