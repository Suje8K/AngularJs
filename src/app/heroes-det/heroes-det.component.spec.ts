import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesDetComponent } from './heroes-det.component';

describe('HeroesDetComponent', () => {
  let component: HeroesDetComponent;
  let fixture: ComponentFixture<HeroesDetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesDetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
