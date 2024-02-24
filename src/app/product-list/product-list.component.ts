import { Component } from '@angular/core';
import { products } from '../product';
import { Iproute } from '../iproute';
import { OrderService } from '../order.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'] 
})
export class ProductListComponent {
  products: Iproute[] = products;
  constructor(private CS : OrderService){}
  addToCart (product:Iproute): void {this.CS.addToCart(product);
  alert('added ')}
}