import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProductCartComponent } from './components/product-cart/product-cart.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

const routes: Routes = [
  // { path: '', redirectTo:"home", component: HomePageComponent },
  { path: '', component: HomePageComponent },
  { path: 'productDetails', component: ProductDetailsComponent },
  { path: 'productCart', component: ProductCartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
