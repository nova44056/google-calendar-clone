import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Detail } from 'src/app/module/calendar/class';
import { DetailType } from 'src/app/module/calendar/type';
import { Modal } from '../modal';

@Component({
  selector: 'app-create-detail',
  templateUrl: './create-detail.component.html',
  styleUrls: ['./create-detail.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: `translateX(-5%)` }),
        animate('300ms', style({ transform: `translateX(0%)` })),
      ]),
    ]),
  ],
})
export class CreateDetailComponent extends Modal implements OnInit {
  private detailPayload: Detail;
  private detailType: DetailType = 'event';

  @Input()
  visibility: boolean;

  @Input()
  position: {};

  constructor() {
    super();
  }

  public setDetailType(type: DetailType) {
    this.detailType = type;
  }

  public getDetailType(): DetailType {
    return this.detailType;
  }

  ngOnInit(): void {}
}
