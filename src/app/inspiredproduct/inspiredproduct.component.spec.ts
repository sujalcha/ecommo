import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspiredproductComponent } from './inspiredproduct.component';

describe('InspiredproductComponent', () => {
  let component: InspiredproductComponent;
  let fixture: ComponentFixture<InspiredproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspiredproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspiredproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
