import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },{
    path: 'products', component: ProductsComponent
  },{
    path: 'add', component: AddProductComponent, canActivate: [AuthGuard]
  },{
    path: 'edit', component: EditProductComponent, canActivate: [AuthGuard]
  },{
    path: 'products/:id', component: ProductDetailComponent, canActivate: [AuthGuard]
  },{
    path: 'login', component: LoginComponent
  },{
    path: 'register', component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
