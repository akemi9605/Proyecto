import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICharacter, ICharacterDetail } from '../models/character.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private characterUrl = 'https://api.got.show/api/show/characters';
  constructor(private http$: HttpClient) {

  }
  getCharacters(): Observable<ICharacter[]> {
    const observable: Observable<any> = this.http$.get(this.characterUrl);
    const observableFiltered: Observable<any> = observable.pipe(
      map(
        (data: Array<ICharacter>) => {
          const datosFiltrados = [];
          // RECORRO EL DATA GUARDANDO SOLO LOS QUE TIENEN IMAGEN Y NOMBRE
          data.forEach((character: ICharacter) => {
            if (character.image && character.name) {
              datosFiltrados.push(character);
            }
          });
          return datosFiltrados;
        }
      ),
    );
    return observableFiltered;
  }
  getCharacterDetail(name: string): Observable<ICharacterDetail> {
    const observable: Observable<any> = this.http$.get(this.characterUrl + '/' + name);
    console.log(observable);
    return observable;

  }

}

