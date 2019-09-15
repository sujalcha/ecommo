import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductadvertComponent } from './productadvert.component';

describe('ProductadvertComponent', () => {
  let component: ProductadvertComponent;
  let fixture: ComponentFixture<ProductadvertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductadvertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductadvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
