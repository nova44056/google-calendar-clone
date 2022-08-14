import {
  Component,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-secondary-dropdown-btn',
  templateUrl: './secondary-dropdown-btn.component.html',
  styleUrls: ['./secondary-dropdown-btn.component.scss'],
})
export class SecondaryDropdownBtnComponent implements OnInit {
  @Input()
  options: any[] = [];

  @Input()
  currentValue: typeof this.options[0];

  constructor() {}

  public test() {
    console.log('meow');
  }

  ngOnInit(): void {}
}
