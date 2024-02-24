import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../product';
import { Iproute } from '../iproute';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{
product: Iproute = {} as Iproute;
   index: number = 0;
  constructor(private route: ActivatedRoute, private CS: OrderService) {}
 addToCart() {alert('added');   this.CS.addToCart(this.product);  }
  
    ngOnInit(): void { this.index = this.route.snapshot.params['id']; this.product = products[this.index];
     }
}



