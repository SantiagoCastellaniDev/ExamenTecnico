import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './components/cart/cart-page/cart-page.component';
import { FechasComponent } from './components/fechas/fechas.component';
import { LandingComponent } from './components/landing/landing.component';
import { ProductDetailComponent } from './components/product/product-detail/product-detail.component';
import { ProductPageComponent } from './components/product/product-page/product-page.component';
import { AdminGuard } from './guards/admin.guard';
import { UsersGuard } from './guards/users.guard';

const routes: Routes = [
  {path:'landing',component:LandingComponent},
  {path:'products',component:ProductPageComponent},
  {path:'product/detail/:id?',component:ProductDetailComponent}, 
  {path:'specialDay',component:FechasComponent}, 
  {path: 'cart', component: CartPageComponent,canActivate:[UsersGuard]},
  {path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)},
  {path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),canActivate:[AdminGuard]},
  {path:'**',redirectTo:'landing'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
