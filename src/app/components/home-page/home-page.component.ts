import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/interface/products';
import { ProductsService } from 'src/app/service/products.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  productArray: Products[] = [];
  cartCount: number = 0;
  isAddedToCart: boolean = false;
  constructor(private serviceProduct: ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.serviceProduct.getProducts().subscribe((data: any) => {
      data['products'].map((product: any) => this.productArray.push(product));
    
    });

  }

  imageCart(index:number) {
    this.serviceProduct.productSubject.next(this.productArray[index]);
    this.router.navigate(['productDetails'])
    console.log(this.productArray[index]);
    
  }

}
