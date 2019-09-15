import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedproductsComponent } from './featuredproducts.component';

describe('FeaturedproductsComponent', () => {
  let component: FeaturedproductsComponent;
  let fixture: ComponentFixture<FeaturedproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
