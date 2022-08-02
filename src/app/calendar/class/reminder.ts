import { IReminder } from '../interface';
import { Detail } from './detail';

export class Reminder extends Detail {
  constructor(payload: IReminder) {
    super(payload, 'reminder');
  }
}
