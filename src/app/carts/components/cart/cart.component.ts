import { Component, OnInit } from '@angular/core';
import { parse } from 'node:path';
import { CartsService } from '../../services/carts.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  cartProducts:any[]=[];
  total:any=0;
  success:boolean=false;
    constructor(private service:CartsService){}
    ngOnInit(): void {
      this.getCartProducts();
    }


    getCartProducts(){
      const cartData = localStorage.getItem("Cart");
      if (cartData) {
        this.cartProducts = JSON.parse(cartData);

      }
      this.getcarttotal();

 console.log(this.cartProducts);
    }
    addAmount(index:number){
      this.cartProducts[index].quantity++;
      this.getcarttotal();
      localStorage.setItem("Cart",JSON.stringify(this.cartProducts));
    }

    minusAmount(index:number){
      this.cartProducts[index].quantity--;
      this.getcarttotal();
      localStorage.setItem("Cart",JSON.stringify(this.cartProducts));
    }

    detectChange(){
      localStorage.setItem("Cart",JSON.stringify(this.cartProducts));
      this.getcarttotal();
    }

    deletProduct(index:number){
      this.cartProducts.splice(index,1);
      localStorage.setItem("Cart",JSON.stringify(this.cartProducts));
      this.getcarttotal();
    }

    clearCart(){
      this.cartProducts=[];
      localStorage.setItem("Cart",JSON.stringify(this.cartProducts));
      this.getcarttotal();

    }


     getcarttotal(){
      this.total=0;
      for(let x in this.cartProducts)
       {
          this.total += this.cartProducts[x].item.price * this.cartProducts[x].quantity;
       }
     // console.log(this.total);
}


addCart(){
  let products=this.cartProducts.map(item => {
    return {productId:item.item.id,Color:"red"}
  })
  let Model={
    email:"noran@gmail.com",
    password:"test1234",
    productId:this.cartProducts[0].item._id,
    color:"red"

  };
  this.service.createNewCart(Model).subscribe(res => {
     this.success=true;
  })
  console.log(Model);

}
}










