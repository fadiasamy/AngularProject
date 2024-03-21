import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css'
})
export class AllProductsComponent implements OnInit {
  products: any[] = [];
  loading:boolean=false;

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

  }

}








