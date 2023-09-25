import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { CharacterDetail } from '../model/character-detail';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  allCharacters = new BehaviorSubject<CharacterDetail[]>([]);
  //variabile che si può subscribare - ci dice quando cambia

  readonly BASE_URL = 'https://rickandmortyapi.com/api/';

  pagenumber = 1;

  constructor(private http: HttpClient) {
    this.getAllCharacters();
  }

  getAllCharacters(): void {
    this.http
      .get<any>(this.BASE_URL + 'character?page=' + this.pagenumber)
      .pipe(map((data) => data.results))
      .subscribe((chars) => this.allCharacters.next(chars));
  }

  // getAllCharacters(): Observable<CharacterDetail[]> {
  //   return this.http
  //     .get<any>(this.BASE_URL + 'character?page=' + this.pagenumber)
  //     .pipe(map((data) => data.results));
  // }

  previousPage() {
    if (this.pagenumber > 1) {
      this.pagenumber--;
      this.getAllCharacters();
    }
  }
  nextPage() {
    this.pagenumber++;
    this.getAllCharacters();
  }
}
