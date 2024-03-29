import { NgModule,Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';
import { LoginComponent } from './auth/components/login/login.component';
import { CartComponent } from './carts/components/cart/cart.component';

const routes: Routes = [
  {path:"products" , component:AllProductsComponent},

  {path:"details/:id" , component:ProductsDetailsComponent},
  {path:"details" , component:ProductsDetailsComponent},
  {path:"login", component:LoginComponent},
  {path:"carts" , component:CartComponent},
  {path:"**" , redirectTo:"products",pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
