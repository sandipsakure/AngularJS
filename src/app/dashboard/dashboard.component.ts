import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { SubjectService } from './subject.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(
    private heroService: HeroService,
    private subjectService: SubjectService
  ) {
    this.subjectService.bSubject.subscribe(value => {
      alert('Subscription got: ' +  value); // Subscription got b,
      // ^ This would not happen
      // for a generic observable
      // or generic subject by default
    });
  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

}
