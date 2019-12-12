import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DishListComponent } from './dish-list/dish-list.component';
import { AddDishComponent } from './add-dish/add-dish.component';
import { DishDetailComponent } from './dish-detail/dish-detail.component';
import { LoginComponent } from './login/login.component';
import { NoAuthGuard } from './API/guards/no-auth.guard';
import { AuthGuard } from './API/guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [NoAuthGuard] },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    data: { role: 'admin' },
    children: [
      { path: 'searchDish', component: AddDishComponent },
      { path: 'detail/:id', component: DishDetailComponent, },
      { path: 'dishList', component: DishListComponent },
    ]
  },
  { path: '**', component: LoginComponent, canActivate: [NoAuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
