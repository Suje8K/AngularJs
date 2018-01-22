import {Component, OnInit, Input} from '@angular/core';
import {Hero} from '../Hero';

@Component({
  selector: 'app-heroes-det',
  templateUrl: './heroes-det.component.html',
  styleUrls: ['./heroes-det.component.css']
})
export class HeroesDetComponent implements OnInit {

  @Input() hero: Hero;
  constructor() {}

  ngOnInit() {
  }

}
