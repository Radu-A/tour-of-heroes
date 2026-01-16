import { Component, signal, model } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeroModel } from '../hero.model';

@Component({
  selector: 'app-heroes',
  imports: [UpperCasePipe, FormsModule],
  templateUrl: './heroes.html',
  styleUrl: './heroes.css',
})
export class Heroes {
  // hero = model<HeroModel>({
  //   id: 1,
  //   name: 'Windstorm',
  // });
  hero = {
    id: 1,
    name: 'Windstorm',
  };
}
