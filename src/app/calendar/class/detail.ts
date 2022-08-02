import { IDetail } from '../interface';
import { DetailType } from '../type';

export class Detail {
  protected title: string;
  protected startTime: Date;
  protected endTime: Date;
  protected startDate: Date;
  protected endDate: Date;
  protected type: DetailType;

  constructor(props: IDetail, type: DetailType) {
    this.title = props.title;
    this.startTime = props.startTime;
    this.endTime = props.endTime;
    this.startDate = props.startDate;
    this.endDate = props.endDate;
    this.type = type;
  }

  public getTitle(): string {
    return this.title;
  }

  public getStartTime(): Date {
    return this.startTime;
  }

  public getEndTime(): Date {
    return this.endTime;
  }

  public getStartDate(): Date {
    return this.startDate;
  }

  public getEndDate(): Date {
    return this.endDate;
  }
}
