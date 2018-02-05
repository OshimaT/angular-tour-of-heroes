import { Injectable } from '@angular/core';
import { Hero } from './hero';
import {HEROES} from './mock-heroes';

import {Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


@Injectable()
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }

getHero(id: number): Observable<Hero> {
  // Todo: send the message _after_ fetching the hero
  //this.messageService.add(`HeroService: fetched hero id=${id}`);
  return of(HEROES.find(hero => hero.id === id));
}

}