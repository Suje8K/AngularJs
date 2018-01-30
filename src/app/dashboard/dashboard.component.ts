import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {DashboardService} from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[];
  constructor(private dService: DashboardService) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.dService.getHeroList().subscribe(heroes => {
      this.dService.heroLL = heroes;
      this.heroes = heroes.slice(0, 4);
    });
  }

}
