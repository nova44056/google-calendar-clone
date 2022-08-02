import { IEvent } from '../interface';
import { Detail } from './detail';

export class Event extends Detail {
  constructor(payload: IEvent) {
    super(payload, 'event');
  }
}
