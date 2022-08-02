import { ITask } from '../interface';
import { Detail } from './detail';

export class Task extends Detail {
  constructor(payload: ITask) {
    super(payload, 'task');
  }
}
