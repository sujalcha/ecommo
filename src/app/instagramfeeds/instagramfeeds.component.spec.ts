import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramfeedsComponent } from './instagramfeeds.component';

describe('InstagramfeedsComponent', () => {
  let component: InstagramfeedsComponent;
  let fixture: ComponentFixture<InstagramfeedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstagramfeedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstagramfeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
