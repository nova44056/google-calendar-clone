import { Detail } from './detail';

export class Day {
  private day: number;
  private month: number;
  private year: number;

  private details: Detail[] = [];

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
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
