import {Injectable} from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {MessageService} from './message.service';

@Injectable()
export class HeroService {

  constructor(private mservice: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    this.mservice.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getMessageService(): MessageService {
    return this.mservice;
  }

  getHero(id: number): Observable<Hero> {
    this.mservice.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
