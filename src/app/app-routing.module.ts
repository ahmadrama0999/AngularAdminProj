import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DishListComponent } from './dish-list/dish-list.component';
import { SearchDishComponent } from './search-dish/search-dish.component';

const routes: Routes = [
    { path: '', redirectTo: '/searchDish', pathMatch: 'full' },
    { path: 'searchDish', component: SearchDishComponent},
    { path: 'dishList', component: DishListComponent}
 ];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}
