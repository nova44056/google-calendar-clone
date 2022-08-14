import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondary-btn',
  templateUrl: './secondary-btn.component.html',
  styleUrls: ['./secondary-btn.component.scss'],
})
export class SecondaryBtnComponent implements OnInit {
  @Input()
  text: string;

  @Input()
  icon: string;

  constructor() {}

  ngOnInit(): void {}
}
