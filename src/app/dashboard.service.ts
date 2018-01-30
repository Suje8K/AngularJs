import {Injectable} from '@angular/core';
import {Hero} from './hero';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {MessageService} from './message.service';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class DashboardService {

  hListURL = 'http://172.22.8.3:8080/Practices/rest/message/heroList/5';
  heroLL: Hero[];
  constructor(private hClient: HttpClient) {}

  getHeroList(): Observable<Hero[]> {
    return this.hClient.get<Hero[]>(this.hListURL);
  }

  getHero(id: number): Observable<Hero> {
    return of(this.heroLL.find(hero => hero.id === id));
  }
}
