import { Component } from '@angular/core';
import {Hero} from "../hero";
import {NgFor, UpperCasePipe} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HEROES} from "../mock-heroes";
import {HeroDetailComponent} from "../hero-detail/hero-detail.component";
import {HeroService} from "../hero.service";
import {MessageService} from "../message.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    UpperCasePipe,
    FormsModule,
    NgFor,
    HeroDetailComponent,
    RouterLink
  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroService: HeroService, private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelected(hero: Hero){
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {

    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}
