import { Component, OnInit } from '@angular/core';
import { ICharacter } from '../../core/models/character.interface';
import { CharacterService } from '../../core/service/character.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.sass']
})
export class TimelineComponent implements OnInit {
  public characters: ICharacter[] = [];
  private orderBy = true;

  private orderByAge: any = (characters: ICharacter[], orderBy: boolean) => {
    const orderedArr: ICharacter[] = characters
      .filter(character => character.age && typeof (character.age.age) === 'number')
      .sort((a: ICharacter, b: ICharacter): number => {
        let order = 0;
        if (a.age.age > b.age.age) {
          order = orderBy ? 1 : -1;
        }
        if (a.age.age < b.age.age) {
          order = orderBy ? -1 : 1;
        }
        return order;

      });
    console.log(characters);
    return orderedArr;
  }


  constructor(private character$: CharacterService) {
  }
  ngOnInit() {
    this.character$.getCharacters().subscribe((characters) => {
      this.characters = this.orderByAge(characters, this.orderBy);
    });
  }

  public changeOrder() {
    this.orderBy = !this.orderBy;
    this.characters = this.orderByAge(this.characters, this.orderBy);

  }
}
