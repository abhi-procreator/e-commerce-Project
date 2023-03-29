import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductCartComponent } from './components/product-cart/product-cart.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './service/products.service';
import { ButtonModule } from 'primeng/button';





@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductDetailsComponent,
    ProductCartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
