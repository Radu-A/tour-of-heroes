import { Component, signal, inject } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeroModel } from '../hero.model';
import { HeroService } from '../hero-service';

import { HeroeDetails } from '../heroe-details/heroe-details';

@Component({
  selector: 'app-heroes',
  imports: [UpperCasePipe, FormsModule, HeroeDetails],
  templateUrl: './heroes.html',
  styleUrl: './heroes.css',
})
export class Heroes {
  // hero = model<HeroModel>({
  //   id: 1,
  //   name: 'Windstorm',
  // });
  private readonly service = inject(HeroService);
  heroes = signal<HeroModel[]>([]);
  selectedHero = signal<HeroModel | undefined>(undefined);
  onSelect(hero: HeroModel): void {
    this.selectedHero.set(hero);
  }
  getHeroes(): void {
    const data = this.service.getHeroes();
    this.heroes.set(data);
  }
  ngOnInit(): void {
    this.getHeroes();
    // this.getHeroesOf();
  }

  heroesOf: HeroModel[] = [];
  // selectedHeroOf: HeroModel[] | undefined;

  // getHeroesOf(): void {
  //   this.service.getHeroesOf().subscribe((response) => (this.heroesOf = response));
  // }
}
