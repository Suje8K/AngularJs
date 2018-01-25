import {Injectable} from '@angular/core';
import {Hero} from './hero';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {MessageService} from './message.service';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HeroService {

  hero1: Hero[];
  constructor(private mservice: MessageService, private http: HttpClient) {}

  getHeroes(): void {
    this.getHeroes1().subscribe(heroes => this.hero1 = heroes);
  }

  getMessageService(): MessageService {
    return this.mservice;
  }

  getHero(id: number): Observable<Hero> {
    this.mservice.add(`HeroService: fetched hero id=${id}`);
    return of(this.hero1.find(hero => hero.id === id));
  }

  getHeroes1(): Observable<Hero[]> {
    this.mservice.add('HeroService: fetched heroes');
    return this.http.get<Hero[]>('http://172.22.8.3:8080/Practices/rest/message/heroList/5');
  }
}
