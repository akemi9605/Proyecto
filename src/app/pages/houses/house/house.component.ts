import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { IHouseDetail } from 'src/app/core/models/house.interface';
import { HouseService } from 'src/app/core/service/house.service';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.sass']
})
export class HouseComponent implements OnInit {
  public houseId: string = null;
  public houseDetail: IHouseDetail = null;
  constructor(private activatedRoute: ActivatedRoute, private house$: HouseService, private _location: Location) {
    this.activatedRoute.params.subscribe((params) => {
      if (params && params.id) {
        this.houseId = params.id;
        this.loadHouseDetailData();
      }
    });
  }
  ngOnInit() {
  }
  public loadHouseDetailData() {
    this.house$.getHouseDetail(this.houseId).subscribe(houseDetail => {
      this.houseDetail = houseDetail[0];
    });
  }
  backClicked() {
    this._location.back();
  }
}
