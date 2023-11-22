import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ListProductsComponent } from './components/products/list-products/list-products.component';
import { AddProductComponent } from './components/products/add-product/add-product.component';
import { authUserGuard } from './auth-user.guard';
import { authAdminGuard } from './auth-admin.guard';

const routes: Routes = [
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
    ],
  },
  {
    path: 'products',
    children: [
      {
        path: 'list',
        component: ListProductsComponent,
        canActivate: [authUserGuard],
      },
      {
        path: 'add',
        component: AddProductComponent,
        canActivate: [authAdminGuard],
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'auth/login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
