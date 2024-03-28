import { NgModule,Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';
import { LoginComponent } from './auth/components/login/login.component';
import { CartComponent } from './carts/components/cart/cart.component';

const routes: Routes = [
  {path:"products" , component:AllProductsComponent},
<<<<<<< HEAD
  {path:"details/:id" , component:ProductsDetailsComponent},
=======
  {path:"details" , component:ProductsDetailsComponent},
  {path:"login", component:LoginComponent},
>>>>>>> 71c38d601e2902544b47e84122f437521337e811
  {path:"carts" , component:CartComponent},
  {path:"**" , redirectTo:"products",pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
