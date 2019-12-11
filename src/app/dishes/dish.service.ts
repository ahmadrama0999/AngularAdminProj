import { Injectable } from '@angular/core';
import { Dish } from './dish';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class DishService {

    // private dataBaseUrl='https://dishes-a1d9.restdb.io/rest/values?apikey=5df14bc1bf46220df655da25'
    private url = 'https://dishes-a1d9.restdb.io/rest/values';  // URL to web api
    private apiKey = '?apikey=5df14bc1bf46220df655da25'


    // getDishes(): Dish[] {
    //     return this.dishes;
    // }

    // getDish(id: number): Dish {
    //     console.log(this.dishes.find(dish => dish.id === id ));
    //     return this.dishes.find(dish => dish.id === id);
    // }

    // updateDish(dish: Dish) {
    //       console.log(this.dishes.find(dis => dis.id === dish.id).name = dish.name);
    //       this.dishes.find(dis => dis.id === dish.id).name = dish.name;
    //   }
    // deleteDish(dish: Dish) {
    //    this.dishes.splice(this.dishes.indexOf(dish), 1);
    // }

    // addDish(name: string) {
    //     this.dishes.push({id: this.genId(), name, url: ''} );
    // }

    //  private genId(): number {
    //     return this.dishes.length > 0 ? Math.max(...this.dishes.map(dish => dish.id)) + 1 : 11;
    //   }


    constructor(private http: HttpClient) { }

      getDishes(): Observable<Dish[]> {
        return this.http.get<Dish[]>(this.url + this.apiKey)
          .pipe(catchError(this.handleError<Dish[]>('getHeroes', [])));
      }

      private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
          // TODO: send the error to remote logging infrastructure
          console.error(error); // log to console instead
          // Let the app keep running by returning an empty result.
          return of(result as T);
        };
      }

}



