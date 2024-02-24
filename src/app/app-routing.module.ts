import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductListComponent } from './product-list/product-list.component';
import { OrderComponent } from './order/order.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [ 
  {path:"", component: HomeComponent},
  {path:"about", component: AboutComponent},
  {path:"productList", component: ProductListComponent},
  {path:"products/:id", component: ProductDetailsComponent},
  {path:"order", component: OrderComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
