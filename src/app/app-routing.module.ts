import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DishListComponent } from './dish-list/dish-list.component';
import { SearchDishComponent } from './search-dish/search-dish.component';
import { DishDetailComponent } from './dishDetail/dishDetail.component';
import { LoginComponent } from './login/login.component';
import { NoAuthGuard } from './guards/no-auth.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
    // { path: '', redirectTo: '/dishList', pathMatch: 'full' },
    // { path: 'searchDish', component: SearchDishComponent},
    // { path: 'detail/:id', component: DishDetailComponent },
    // { path: 'dishList', component: DishListComponent},
    // { path: 'login', component: LoginComponent },
    { path: 'login', component: LoginComponent, canActivate: [NoAuthGuard] },
    { path: 'admin',
      // component: DishListComponent,
      canActivate: [AuthGuard],
      data: { role: 'admin' },
      children: [
        { path: 'searchDish', component: SearchDishComponent},
        { path: 'detail/:id', component: DishDetailComponent },
        { path: 'dishList', component: DishListComponent},
      ]
    },
  // {
  //   path: 'user',
  //   component: SearchDishComponent,
  //   canActivate: [AuthGuard],
  //   data: { role: 'user'},
  //   children: [
  //     { path: 'profile', component: SearchDishComponent }
  //   ]
  // },
  { path: '**', component: LoginComponent, canActivate: [NoAuthGuard]},
 ];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}
