import { Component, model } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroModel } from '../hero.model';

@Component({
  selector: 'app-heroe-details',
  imports: [UpperCasePipe, FormsModule],
  templateUrl: './heroe-details.html',
  styleUrl: './heroe-details.css',
})
export class HeroeDetails {
  hero = model.required<HeroModel | undefined>();
}
