import { Component, OnInit } from '@angular/core';
import { Iproute } from '../iproute';
import { OrderService } from '../order.service';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit{
  cart: Iproute[] = [];
  total: number = 0;

  constructor(private CS: OrderService) {}

  ngOnInit(): void {
    this.cart = this.CS.showCart();
  
  }

}



 