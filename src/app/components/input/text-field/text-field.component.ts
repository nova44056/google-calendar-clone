import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss'],
})
export class TextFieldComponent implements OnInit {
  @Input()
  placeholder: string = '';

  protected focus(e: Event) {
    const elem = e.target as HTMLElement;
    const parent = elem.parentElement;

    const borderLeft = parent?.querySelector(
      '.text_field_animationBorder_left'
    ) as HTMLElement;
    borderLeft.style.width = '50%';

    const borderRight = parent?.querySelector(
      '.text_field_animationBorder_right'
    ) as HTMLElement;
    borderRight.style.left = '0';
    borderRight.style.width = '50%';
  }

  protected blur(e: Event) {
    const elem = e.target as HTMLElement;
    const parent = elem.parentElement;

    const borderLeft = parent?.querySelector(
      '.text_field_animationBorder_left'
    ) as HTMLElement;
    borderLeft.style.width = '0';
    const borderRight = parent?.querySelector(
      '.text_field_animationBorder_right'
    ) as HTMLElement;
    borderRight.style.left = '50%';
    borderRight.style.width = '0';
  }

  constructor() {}

  ngOnInit(): void {}
}
