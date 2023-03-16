import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { ProductPageComponent } from './components/product/product-page/product-page.component';

const routes: Routes = [
  {path:'landing',component:LandingComponent},
  {path:'products',component:ProductPageComponent},
  {path:'**',redirectTo:'landing'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
