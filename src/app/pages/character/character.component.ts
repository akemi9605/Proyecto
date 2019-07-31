import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../../core/service/character.service';
import { ICharacterDetail } from 'src/app/core/models/character.interface';
import { Location } from '@angular/common';
@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.sass']
})
export class CharacterComponent implements OnInit {
  public characterId: string = null;
  public characterDetail: ICharacterDetail = null;
  constructor(private activatedRoute: ActivatedRoute, private character$: CharacterService, private _location: Location) {
    this.activatedRoute.params.subscribe((params) => {
      if (params && params.id) {
        this.characterId = params.id;
        this.loadCharacterDetailData();
      }
    });
  }

  ngOnInit() {
  }

  public loadCharacterDetailData() {
    this.character$.getCharacterDetail(this.characterId).subscribe(characterDetail => {
      this.characterDetail = characterDetail;
    });
  }
  backClicked() {
    this._location.back();
  }
}
