import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {

  constructor(private http$: HttpClient) { }

  /*olderCharacter(): Observable<ICharacter[]> {
    return this.http$.get('https://api.got.show/api/show/characters')
      .map(result => result);
  }*/
}
