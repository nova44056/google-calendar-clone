import { Page } from './page';

export class Calendar {
  protected TOTAL_MONTH = 12;

  protected currentYear: number;
  protected currentMonth: number;
  protected pages: Page[] = [];

  constructor(currentMonth: number, currentYear: number) {
    this.currentMonth = currentMonth;
    this.currentYear = currentYear;
    this.pages = Array.from(
      {
        length: this.TOTAL_MONTH,
      },
      (_, i: number) => new Page(i, currentYear)
    );
  }

  public getPages(): Page[] {
    return this.pages;
  }

  public getPage(month: number): Page {
    return this.pages[month];
  }

  public getCurrentMonth(): number {
    return this.currentMonth;
  }

  public getCurrentYear(): number {
    return this.currentYear;
  }

  public setCurrentMonth(month: number): void {
    this.currentMonth = month;
  }

  public setCurrentYear(year: number): void {
    this.currentYear = year;
  }

  public setPages(pages: Page[]): void {
    this.pages = pages;
  }
}
