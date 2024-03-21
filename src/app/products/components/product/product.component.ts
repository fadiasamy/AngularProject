import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() data: any = {};
  @Input() item=new EventEmitter<any>() ;

  constructor() {}

  ngOnInit(): void {}

  add(){
    console.log(this.data);
    this.item.emit(this.data)

  }
}














