import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/interface/products';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Products = new Products();
  isProductAdded: boolean = false;
  constructor(private serviceProduct: ProductsService) { }

  ngOnInit(): void {

    this.serviceProduct.productSubject.subscribe((data) => {
      this.product = data;
      this.serviceProduct.productArray.forEach((p) => {
        if (p.id == data.id) {
          this.isProductAdded = true;
        }
      });
      // console.log(data);
      // console.log(this.product);
    });

  }

  addtoCart() {
    if (this.isProductAdded) {

      var index = this.serviceProduct.productArray.indexOf(this.product);
      console.log(index);
      console.log(this.serviceProduct.productArray);
      
      let list = this.serviceProduct.productArray.filter((p)=> p.id != this.product.id);
      this.serviceProduct.productArray = list;
      console.log(list);
      this.isProductAdded = false;

    } else {

      this.serviceProduct.productArray.push(this.product);
      this.isProductAdded = true;

    }
  }

}
