import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { SubjectService } from '../dashboard/subject.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService,
    private subjectService: SubjectService) {
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
    .subscribe(heroes => this.heroes = heroes);
  }
}
