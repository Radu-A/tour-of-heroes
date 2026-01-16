import { Component, signal } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HEROES } from './../mock-heroes';
import { HeroModel } from '../hero.model';

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
  heroes = signal<HeroModel[]>(HEROES);
  selectedHero = signal<HeroModel | undefined>(undefined);
  onSelect(hero: HeroModel): void {
    this.selectedHero.set(hero);
  }
}
