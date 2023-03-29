import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
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
  // productviewDetail:boolean=false;
  constructor(private serviceProduct: ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.serviceProduct.getProducts().subscribe((data: any) => {
      data['products'].map((product: any) => this.productArray.push(product));
    
    });



  //   this.productArray = this.serviceProduct.productArray;
  //  this.productArray.filter((product) => product.isAddedToCart ? this.cartCount++ : null);

   // this.productArray.filter((product) => product.isAddedToCart ? this.cartCount++ : null);
  }

  imageCart(index:number) {
    this.serviceProduct.productSubject.next(this.productArray[index]);
    this.router.navigate(['productDetails'])
    console.log(this.productArray[index]);
    
  }

  // addtoCart(index: number) {
  //   this.cartCount = index;
  //   this.productArray[index].isAddedToCart = !this.productArray[index].isAddedToCart;
  //   if (this.productArray[index].isAddedToCart) {
  //     this.cartCount++;
  //   } else {
  //     this.cartCount--;
  //   }
  // }


}
