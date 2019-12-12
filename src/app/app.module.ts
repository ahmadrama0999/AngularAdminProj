import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TokenInterceptor } from './API/token.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DishListComponent } from './dish-list/dish-list.component';
import { AppRoutingModule } from './app-routing.module';
import { AddDishComponent } from './add-dish/add-dish.component';
import { DishDetailComponent } from './dish-detail/dish-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClient } from '@angular/common/http';
import { AuthService } from './API/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader, TranslateCompiler } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CcShortLinkDirective } from '../assets/CustomDirectives/cc-short-link.directive';
import { ShortLinkPipe } from '../assets/CustomPipes/short-link.pipe';
import { ShorterApi } from '../assets/CustomPipes/ShorterApi.service';




@NgModule({
   declarations: [
      AppComponent,
      DishListComponent,
      AddDishComponent,
      DishDetailComponent,
      LoginComponent,
      CcShortLinkDirective,
      ShortLinkPipe,
   ],
   imports: [
      BrowserModule,
      TranslateModule.forRoot({
         loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
         }
      }),
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
      AuthService, ShorterApi
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }


export function HttpLoaderFactory(http: HttpClient) {
   return new TranslateHttpLoader(http);
}
