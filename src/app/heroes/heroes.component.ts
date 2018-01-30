import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {DashboardService} from '../dashboard.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  constructor(private dService: DashboardService) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroes = this.dService.heroLL;
  }

}
