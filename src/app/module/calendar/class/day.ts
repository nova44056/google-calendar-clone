import { Detail } from './detail';

export class Day {
  private day: number;
  private month: number;
  private year: number;

  private details: Detail[] = [];

  constructor(day: number, month: number, year: number) {
    this.day = day;
    this.month = month;
    this.year = year;
  }

  public addDetail(detail: Detail) {
    this.details.push(detail);
  }

  public getDay(): number {
    return this.day;
  }

  public getMonth(): number {
    return this.month;
  }

  public getYear(): number {
    return this.year;
  }
}
