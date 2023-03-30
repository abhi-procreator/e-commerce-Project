import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlConstant } from '../constants/url.constant';
import { Products } from '../interface/products';
import { BehaviorSubject, } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productArray: Products[] = [];

  productSubject = new BehaviorSubject<Products>(new Products());

  constructor(private http: HttpClient, private url: UrlConstant) {

  }
  getProducts() {
    return this.http.get(this.url.product);
  }
}


