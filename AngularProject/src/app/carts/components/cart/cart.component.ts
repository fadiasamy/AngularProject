import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  cartProducts:any[]=[];
    constructor(){}
    ngOnInit(): void {
      this.getCartProducts();
    }


    getCartProducts(){
      const cartData = localStorage.getItem("Cart");
      if (cartData) {
        this.cartProducts = JSON.parse(cartData);
      }
      console.log(this.cartProducts);
    }
}
