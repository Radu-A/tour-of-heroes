import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HeroModel } from './hero.model';
import { HEROES } from './mock-heroes';

import { MessageService } from './message-service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private messageService = inject(MessageService);

  getHeroes(): HeroModel[] {
    const heroes = HEROES;
    this.messageService.add('HeroService: fetched heroes');
    return HEROES;
  }

  getHeroesOf(): Observable<HeroModel[]> {
    const heroes = of(HEROES);
    return heroes;
  }
}
