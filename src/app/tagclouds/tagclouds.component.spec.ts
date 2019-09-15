import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagcloudsComponent } from './tagclouds.component';

describe('TagcloudsComponent', () => {
  let component: TagcloudsComponent;
  let fixture: ComponentFixture<TagcloudsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagcloudsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagcloudsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
