import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadericonsComponent } from './headericons.component';

describe('HeadericonsComponent', () => {
  let component: HeadericonsComponent;
  let fixture: ComponentFixture<HeadericonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadericonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadericonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
