import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideotransitComponent } from './videotransit.component';

describe('VideotransitComponent', () => {
  let component: VideotransitComponent;
  let fixture: ComponentFixture<VideotransitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideotransitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideotransitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
