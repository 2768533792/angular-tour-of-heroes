import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Mr. Wang' },
      { id: 13, name: 'Mr. Chen' },
      { id: 14, name: 'Mr. Li' },
      { id: 15, name: 'Mr. Zhang' },
      { id: 16, name: 'Mr. Wu' },
      { id: 17, name: 'Mr. Ma' },
      { id: 18, name: 'Mr. Lei' },
      { id: 19, name: 'Mr. Shui' },
      { id: 20, name: 'Mr. Hu' },
      { id: 21, name: 'Mr. Bei' },
      { id: 22, name: 'Mr. Ju' },
      { id: 23, name: 'Mr. Rili' },
      { id: 24, name: 'Mr. Gong' },
      { id: 25, name: 'Mr. Lou' },
      { id: 26, name: 'Mr. Cheng' }
    ];

    return { heroes };
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
