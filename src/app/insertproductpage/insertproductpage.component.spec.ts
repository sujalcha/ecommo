import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertproductpageComponent } from './insertproductpage.component';

describe('InsertproductpageComponent', () => {
  let component: InsertproductpageComponent;
  let fixture: ComponentFixture<InsertproductpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertproductpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertproductpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
