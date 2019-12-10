import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TokenInterceptor } from './dishes/token.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DishListComponent } from './dish-list/dish-list.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchDishComponent } from './search-dish/search-dish.component';
import { DishDetailComponent } from './dishDetail/dishDetail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthService } from './dishes/auth.server';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
   declarations: [
      AppComponent,
      DishListComponent,
      SearchDishComponent,
      DishDetailComponent,
      LoginComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      ModalModule.forRoot(),
      TypeaheadModule.forRoot(),
      BrowserAnimationsModule,
      HttpClientModule,
   ],
   providers: [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptor,
        multi: true
      },
      AuthService
    ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
