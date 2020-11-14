import { Injectable } from '@angular/core';
import { Bootcamp } from '../models/bootcamp.model';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private list: Bootcamp[] = [
    {
      id: 1,
      name: 'Aceleração Global Dev #1',
      company: 'Avanade',
    },
    {
      id: 2,
      name: 'Avanade Fullstack Developer',
      company: 'Avanade',
    },
    {
      id: 3,
      name: 'everis FullStack Developer',
      company: 'everis',
    },
    {
      id: 4,
      name: 'React Native Mobile Developer',
      company: 'Digital Innovation One',
    },
    {
      id: 5,
      name: 'React Web Developer',
      company: 'Digital Innovation One',
    },
  ];

  constructor() { }

  getList(): Bootcamp[] {
    return this.list;
  }
}
