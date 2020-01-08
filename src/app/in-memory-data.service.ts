import { InMemoryDbService } from 'angular-in-memory-web-api';
 
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Iron-Man' },
      { id: 12, name: 'Captain America' },
      { id: 13, name: 'Thor' },
      { id: 14, name: 'Hulk' },
      { id: 15, name: 'Black Panther' },
      { id: 16, name: 'Captain Marvel' },
      { id: 17, name: 'Hawk-Eye' },
      { id: 18, name: 'Vision' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    return {heroes};
  }
}