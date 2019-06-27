import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Videotransit2Component } from './videotransit2.component';

describe('Videotransit2Component', () => {
  let component: Videotransit2Component;
  let fixture: ComponentFixture<Videotransit2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Videotransit2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Videotransit2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
