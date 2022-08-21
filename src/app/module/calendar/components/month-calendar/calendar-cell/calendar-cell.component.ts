import { Component, Input, OnInit } from '@angular/core';
import { initializePositionMap } from './position-mapping';

@Component({
  selector: 'app-calendar-cell',
  templateUrl: './calendar-cell.component.html',
  styleUrls: ['./calendar-cell.component.scss'],
})
export class CalendarCellComponent implements OnInit {
  @Input()
  year: number;
  @Input()
  month: number;
  @Input()
  day: number;

  @Input()
  uniqueID: string;

  @Input()
  position: [number, number];

  protected positionMap = [
    [{}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}],
  ];

  protected createDetailDialogVisibility: boolean = false;

  constructor() {
    this.positionMap = initializePositionMap();
  }

  public getCreateDetailDialogVisibility(): boolean {
    return this.createDetailDialogVisibility;
  }

  public setCreateDetailDialogVisibility(visibility: boolean): void {
    this.createDetailDialogVisibility = visibility;
  }

  public toggleCreateDetailDialogVisibility(event: Event): void {
    const targetElement = event.target as HTMLElement;
    const clickHandler = (e: Event) => {
      const clickedElement = e.target as HTMLElement;
      const condition = {
        'dialog is visible': this.getCreateDetailDialogVisibility(),
        'clicked element is not inside dialog':
          !targetElement.contains(clickedElement),
        'clicked element is not dialog':
          targetElement.getAttribute('id') !==
          clickedElement.getAttribute('id'),
      };

      if (
        condition['dialog is visible'] &&
        condition['clicked element is not inside dialog'] &&
        condition['clicked element is not dialog']
      ) {
        window.removeEventListener('click', clickHandler);
        this.setCreateDetailDialogVisibility(false);
      }
    };

    if (
      window.eventListeners?.length === 0 &&
      targetElement.classList.contains('calendar_cell')
    ) {
      window.addEventListener('click', clickHandler);
      this.setCreateDetailDialogVisibility(
        !this.getCreateDetailDialogVisibility()
      );
    }
  }

  ngOnInit(): void {}
}
