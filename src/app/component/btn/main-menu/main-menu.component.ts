import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent implements OnInit {
  @Input()
  onClickCallback: Function | undefined;

  onClick(): void {
    if (this.onClickCallback) this.onClickCallback();
  }

  constructor() {}

  ngOnInit(): void {}
}
