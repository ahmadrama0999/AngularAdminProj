import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DishListComponent } from './dish-list/dish-list.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchDishComponent } from './search-dish/search-dish.component';
import { DishDetailComponent } from './dishDetail/dishDetail.component';

@NgModule({
   declarations: [
      AppComponent,
      DishListComponent,
      SearchDishComponent,
      DishDetailComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
