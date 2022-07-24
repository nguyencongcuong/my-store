import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../../models/cart';
import { Store } from '@ngrx/store';
import { CheckOut } from '../../models/checkout';
import { resetCart } from '../../store/cart/cart.actions';
import { Router } from '@angular/router';
import { NAVIGATION } from '../../models/navigation';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  public isFeedbacked: boolean = false;
  protected checkoutData = {} as CheckOut;
  private cart: Observable<Cart>;

  constructor(
    private store: Store<{ cart: Cart }>,
    private router: Router,
  ) {
    this.cart = this.store.select('cart');
  }

  ngOnInit(): void {
    this.cart.subscribe(res => {
      let totalCount = 0;
      let totalPrice = 0;

      res.forEach((item, index) => {
        totalCount += item.count;
        totalPrice += item.product.price * item.count;
      });

      this.checkoutData = {
        cart: res,
        totalCount: totalCount,
        totalPrice: totalPrice,
        currency: 'USD'
      };
    });
  }

  checkout() {
    // Do more logic for checkout here

    this.store.dispatch(resetCart());
    this.router.navigate([NAVIGATION.CHECKOUT_CONFIRMATION_PAGE]);
  }

}
