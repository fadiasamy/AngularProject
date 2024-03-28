import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() data: any = {};
  @Output() item=new EventEmitter<any>() ;
   addButton:boolean=false;
   amount:number=0;
  constructor(private router:Router) {}

  ngOnInit(): void {}

  add(){
    console.log(this.data);
    this.item.emit({item:this.data, quantity:this.amount})

  }
  onview(id:any)
  {
    this.router.navigate(['/details', id])
  }
}
