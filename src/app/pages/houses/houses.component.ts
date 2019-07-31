import { Component, OnInit } from '@angular/core';
import { IHouse } from '../../core/models/house.interface';
import { HouseService } from '../../core/service/house.service'
@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.sass']
})
export class HousesComponent implements OnInit {
  public houses: IHouse[] = [];
  public filterPost = '';
  constructor(private house$: HouseService) { }

  ngOnInit() {
    this.house$.getHouses().subscribe(houses => {
      this.houses = houses;
      /*Colores aleatorios
        for (let i = 0; i < this.houses.length; i++) {
        this.houses[i].color = this.colorHEX();
      }*/

    });
  }
  /*
    generateLyrics() {
      let letters = ["a", "b", "c", "d", "e", "f", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
      let number = (Math.random() * 15).toFixed(0);
      return letters[number];
    }
  
    colorHEX() {
      let coolor = "";
      for (let i = 0; i < 6; i++) {
        coolor = coolor + this.generateLyrics();
      }
      return "#" + coolor;
    }*/

}
