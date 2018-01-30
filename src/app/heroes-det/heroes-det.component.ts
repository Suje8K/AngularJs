import {Component, OnInit, Input} from '@angular/core';
import {Hero} from '../hero';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {DashboardService} from '../dashboard.service';

@Component({
  selector: 'app-heroes-det',
  templateUrl: './heroes-det.component.html',
  styleUrls: ['./heroes-det.component.css']
})
export class HeroesDetComponent implements OnInit {

  @Input() hero: Hero;
  constructor(
    private route: ActivatedRoute,
    private dService: DashboardService,
    private location: Location) {}

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.dService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
}
