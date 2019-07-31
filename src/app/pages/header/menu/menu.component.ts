import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {
  @Input() colorDiferent = false;
  public opened: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  public open() {
    this.opened = !this.opened;
  }
}
