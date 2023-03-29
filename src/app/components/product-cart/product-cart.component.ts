import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/interface/products';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {
  productArray: Products[] = [];
  constructor(private serviceProduct: ProductsService) { }

  ngOnInit(): void {


    this.productArray = this.serviceProduct.productArray;


  }
}
