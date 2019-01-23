import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ConsultantStore, StartupStore } from '../store/store';
import { Consultant } from '../models/consultant.model';
import { Startup } from '../models/startup.model';

@Injectable({
  providedIn: 'root',  
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const consultants:Array<Consultant> = ConsultantStore;
    const startups:Array<Startup> = StartupStore;
    return {consultants,startups};
  }

  genId<T extends Consultant | Startup >(table: T[]): number {
   return table.length > 0 ? Math.max(...table.map(t => t.id)) + 1 : 11;
 }

}
