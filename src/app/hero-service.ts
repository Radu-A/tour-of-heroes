import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HeroModel } from './hero.model';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  getHeroes(): HeroModel[] {
    const heroes = HEROES;
    return HEROES;
  }

  getHeroesOf(): Observable<HeroModel[]> {
    const heroes = of(HEROES);
    return heroes;
  }
}
