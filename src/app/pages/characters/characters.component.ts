import { Component, OnInit } from '@angular/core';
import { ICharacter } from '../../core/models/character.interface';
import { CharacterService } from '../../core/service/character.service';
@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.sass']
})
export class CharactersComponent implements OnInit {
  public characters: ICharacter[] = [];
  public filterPost = '';
  constructor(private character$: CharacterService) {

  }
  ngOnInit() {
    this.character$.getCharacters().subscribe(characters => {
      this.characters = characters;
    });

    /*const callbackPersonajes = characters => {
    this.characters = characters;
    };
    this.character$.getCharacters().subscribe(callbackPersonajes);*/
  }

}
