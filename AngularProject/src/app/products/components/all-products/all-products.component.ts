import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { json } from 'node:stream/consumers';
import { Router } from '@angular/router';



@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css'
})
export class AllProductsComponent implements OnInit {
  products: any[] = [];
  loading:boolean=false;
  cartProducts:any[]=[];

  constructor(private service:ProductsService){}
  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(){
    this.loading=true;
    this.service.getAllProducts().subscribe((res:any) => {
      this.products=res.data.allProducts;
      this.loading=false;
      // console.log(this.products);
      // console.log(res.data.allProducts[0].images[0])
     }, error =>{
      this.loading=false;
      console.log(error.message);
     })
  }
  addtocart(event:any){
    console.log(event);
    if("Cart" in localStorage){
      this.cartProducts=JSON.parse(localStorage.getItem("Cart")!);
      let exist=this.cartProducts.find(item => item.item.id == event.item.id);
      if(exist){alert ("Product is already in your cart!!")}
      else{
        this.cartProducts.push(event);
        localStorage.setItem("Cart",JSON.stringify(this.cartProducts));
      }

    }else{
      this.cartProducts.push(event);
      localStorage.setItem("Cart",JSON.stringify(this.cartProducts));
    }

  }
   }











