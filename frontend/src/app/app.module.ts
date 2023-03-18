import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsListComponent } from './components/product/products-list/products-list.component';
import { ProductDetailComponent } from './components/product/product-detail/product-detail.component';
import { ProductPageComponent } from './components/product/product-page/product-page.component';
import { HttpClientModule } from '@angular/common/http';
import { CartPageComponent } from './components/cart/cart-page/cart-page.component';
import { CartListComponent } from './components/cart/cart-list/cart-list.component';
import { CartProductComponent } from './components/cart/cart-product/cart-product.component';
import { BtnCartComponent } from './components/btn-cart/btn-cart.component';
import { FechasComponent } from './components/fechas/fechas.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavComponent,
    FooterComponent,
    ProductsListComponent,
    ProductDetailComponent,
    ProductPageComponent,
    CartPageComponent,
    CartListComponent,
    CartProductComponent,
    BtnCartComponent,
    FechasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
