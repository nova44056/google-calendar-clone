import { IEvent, IReminder, ITask } from '../interface';
import { Event } from './event';
import { Reminder } from './reminder';
import { Task } from './task';

export class DetailFactory {
  createEvent(payload: IEvent): Event {
    return new Event(payload);
  }

  createReminder(payload: IReminder): Reminder {
    return new Reminder(payload);
  }

  createTask(payload: ITask): Task {
    return new Task(payload);
  }
}
