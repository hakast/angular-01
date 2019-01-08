import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadMoreServiceComponent } from './read-more-service.component';

describe('ReadMoreServiceComponent', () => {
  let component: ReadMoreServiceComponent;
  let fixture: ComponentFixture<ReadMoreServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadMoreServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadMoreServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
