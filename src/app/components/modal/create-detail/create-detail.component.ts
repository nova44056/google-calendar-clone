import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  @Input()
  detailType: DetailType;

  @Output()
  detailTypeChange = new EventEmitter<DetailType>();

  @Input()
  visibility: boolean;

  @Input()
  position: {};

  constructor() {
    super();
  }

  ngOnInit(): void {}

  public setDetailType(detailType: DetailType): void {
    this.detailType = detailType;
    this.detailTypeChange.emit(detailType);
  }
}
