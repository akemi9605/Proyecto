import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.sass']
})
export class TabsComponent implements OnInit {
  @Input() title: string = null;
  @Input() content: string[] = [];
  public opened: boolean = false;
  constructor() { }

  ngOnInit() {

  }
  public open() {
    this.opened = !this.opened;
  }

}
