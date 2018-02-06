import { Injectable } from '@angular/core';
import { Hero } from './hero';
import {HEROES} from './mock-heroes';

import {Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { HttpClient, HttpHeaders} from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json' })
   };


@Injectable()
export class HeroService {



  private heroesUrl = "api/heroes";

  constructor(private httpClient: HttpClient) { }


  getHeroes(): Observable<Hero[]> {
      return this.httpClient.get<Hero[]>(this.heroesUrl)
      .pipe(catchError(this.handleError('getHeroes()', [])));
  }

getHero(id: number): Observable<Hero> {
  // Todo: send the message _after_ fetching the hero
  //this.messageService.add(`HeroService: fetched hero id=${id}`);
  return of(HEROES.find(hero => hero.id === id));
}

private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    //this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

 updateHero( hero: Hero): Observable<any> {
    return this.httpClient.put(this.heroesUrl, hero, httpOptions);
 }

  addHero(hero: Hero): Observable<Hero> {
    return this.httpClient.post<Hero>(this.heroesUrl, hero, httpOptions);
  }

}
