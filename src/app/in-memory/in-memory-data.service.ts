import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
// import { elevesStore, sallesStore } from '../store/store';
// import { Eleve } from '../models/eleve.model';
// import { Salle } from '../models/salle.model';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const eleves:Array<string> = [];
    return {eleves};
  }

 //  genId<T extends string | string >(table: T[]): number {
 //   return table.length > 0 ? Math.max(...table.map(t => t.id)) + 1 : 11;
 // }


}
