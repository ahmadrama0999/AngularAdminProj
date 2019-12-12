import { Injectable } from '@angular/core';
import { Dish } from './dish.model';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class DishService {

  // private dataBaseUrl='https://dishes-a1d9.restdb.io/rest/values?apikey=5df14bc1bf46220df655da25'
  private url = 'https://dishes-a1d9.restdb.io/rest/values';  // URL to web api
  private apiKey = '?apikey=5df14bc1bf46220df655da25';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  /** DELETE: delete the hero from the server */
  deleteDish(dish: Dish): Observable<{}> {
    const delUrl = this.url + '/' + dish._id + this.apiKey;
    return this.http.delete(delUrl, this.httpOptions)
      .pipe(
        catchError(this.handleError('deleteHero'))
      );
  }

  /** POST: add a new hero to the database */
  addDish(dish: Dish): Observable<Dish> {
    return this.http.post<Dish>(this.url + this.apiKey, dish, this.httpOptions)
      .pipe(
        catchError(this.handleError('addHero', dish))
      );
  }

  /** PUT: update the hero on the server. Returns the updated hero upon success. */
  updateDish(dish: Dish): Observable<Dish> {
    const updUrl = this.url + '/' + dish._id + this.apiKey;
    return this.http.put<Dish>(updUrl, dish, this.httpOptions)
      .pipe(
        catchError(this.handleError('updateDish', dish))
      );
  }

  constructor(private http: HttpClient) { }

  getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>(this.url + this.apiKey)
      .pipe(catchError(this.handleError<Dish[]>('getHeroes', [])));
  }

  getDishById(_id: string): Observable<Dish> {
    const updUrl = this.url + '/' + _id + this.apiKey;
    return this.http.get<Dish>(updUrl)
      .pipe(catchError(this.handleError<Dish>('getHeroes')));
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



