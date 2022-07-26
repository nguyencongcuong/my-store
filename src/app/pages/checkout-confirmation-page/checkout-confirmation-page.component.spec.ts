import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutConfirmationPageComponent } from './checkout-confirmation-page.component';

describe('CheckoutConfirmationPageComponent', () => {
  let component: CheckoutConfirmationPageComponent;
  let fixture: ComponentFixture<CheckoutConfirmationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutConfirmationPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutConfirmationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
