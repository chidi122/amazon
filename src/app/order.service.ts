import { Injectable } from '@angular/core';
import { Iproute } from './iproute';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  order: Iproute[] = [];

  constructor() {}

  addToCart(productParam: Iproute) {
    this.order.push(productParam);
  }

  showCart() {
    return this.order;
  }
}
