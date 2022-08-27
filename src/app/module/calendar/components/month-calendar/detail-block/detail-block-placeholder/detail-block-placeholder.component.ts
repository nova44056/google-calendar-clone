import { Component, Input, OnInit } from '@angular/core';
import { DetailType } from 'src/app/module/calendar/type';

@Component({
  selector: 'app-detail-block-placeholder',
  templateUrl: './detail-block-placeholder.component.html',
  styleUrls: ['./detail-block-placeholder.component.scss'],
})
export class DetailBlockPlaceholderComponent implements OnInit {
  @Input()
  visibility: boolean;

  @Input()
  detailType: DetailType;

  constructor() {}

  ngOnInit(): void {}

  public getBackgroundColor(): string {
    switch (this.detailType) {
      case 'event':
        return 'red';
      case 'reminder':
        return 'green';
      case 'task':
        return 'blue';
      default:
        return '#f5f5f5';
    }
  }
}
