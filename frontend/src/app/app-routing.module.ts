import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './components/cart/cart-page/cart-page.component';
import { LandingComponent } from './components/landing/landing.component';
import { ProductDetailComponent } from './components/product/product-detail/product-detail.component';
import { ProductPageComponent } from './components/product/product-page/product-page.component';

const routes: Routes = [
  {path:'landing',component:LandingComponent},
  {path:'products',component:ProductPageComponent},
  {path:'product/detail/:id?',component:ProductDetailComponent},  
  {path: 'cart', component: CartPageComponent },
  {path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)},
  {path:'**',redirectTo:'landing'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
