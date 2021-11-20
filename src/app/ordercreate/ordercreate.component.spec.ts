import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdercreateComponent } from './ordercreate.component';

describe('OrdercreateComponent', () => {
  let component: OrdercreateComponent;
  let fixture: ComponentFixture<OrdercreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdercreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdercreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
