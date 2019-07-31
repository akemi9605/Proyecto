import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IHouse, IHouseDetail } from '../models/house.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HouseService {
  private houseUrl = 'https://api.got.show/api/show/houses/';
  constructor(private http$: HttpClient) {

  }
  getHouses(): Observable<IHouse[]> {
    const observable: Observable<any> = this.http$.get(this.houseUrl);
    const observableFiltered: Observable<any> = observable.pipe(
      map(
        (data: Array<IHouse>) => {
          const datosFiltrados = [];
          // RECORRO EL DATA GUARDANDO SOLO LOS QUE TIENEN IMAGEN Y NOMBRE
          data.forEach((house: IHouse) => {
            if (house.logoURL && house.name) {
              datosFiltrados.push(house);
            }
          });
          return datosFiltrados;
        })
    );
    return observableFiltered;
  }
  getHouseDetail(name: string): Observable<IHouseDetail> {
    const observable: Observable<any> = this.http$.get(this.houseUrl + name);
    return observable;
  }

}

