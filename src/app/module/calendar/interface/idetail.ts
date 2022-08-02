import { DetailType } from '../type';

export interface IDetail {
  title: string;
  startTime: Date;
  endTime: Date;
  startDate: Date;
  endDate: Date;

  type?: DetailType;
}
