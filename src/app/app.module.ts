import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DishListComponent } from './dish-list/dish-list.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchDishComponent } from './search-dish/search-dish.component';

@NgModule({
  declarations: [
    AppComponent,
    DishListComponent,
    SearchDishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
