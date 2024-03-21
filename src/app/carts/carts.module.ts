import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { CartsComponent } from './components/carts/carts.component';
import { CartComponent } from './components/cart/cart.component';



@NgModule({
  declarations: [
    CartComponent,
    CartComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CartsModule { }
