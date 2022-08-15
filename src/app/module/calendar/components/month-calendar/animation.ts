import { animate, style, transition, trigger } from '@angular/animations';

const transitionTime = '400ms';
const transitionMode = 'ease-in-out';

const transformNextBegin = 2;
const transformNextAfter = 0;

const transformPrevBegin = -2;
const transformPrevAfter = 0;

export const monthCalendarAnimation = trigger('slideInOut', [
  // next animation
  transition(`void => next`, [
    style({
      transform: `translateX(${transformNextBegin}%)`,
      opacity: '0%',
    }),
    animate(
      `${transitionTime} ${transitionMode}`,
      style({
        transform: `translateX(${transformNextAfter}%)`,
        opacity: '100%',
      })
    ),
  ]),
  transition('next => next_next', [
    style({
      transform: `translateX(${transformNextBegin}%)`,
      opacity: '0%',
    }),
    animate(
      `${transitionTime} ${transitionMode}`,
      style({
        transform: `translateX(${transformNextAfter}%)`,
        opacity: '100%',
      })
    ),
  ]),
  transition('next_next => next', [
    style({
      transform: `translateX(${transformNextBegin}%)`,
      opacity: '0%',
    }),
    animate(
      `${transitionTime} ${transitionMode}`,
      style({
        transform: `translateX(${transformNextAfter}%)`,
        opacity: '100%',
      })
    ),
  ]),
  transition('prev => next', [
    style({
      transform: `translateX(${transformNextBegin}%)`,
      opacity: '0%',
    }),
    animate(
      `${transitionTime} ${transitionMode}`,
      style({
        transform: `translateX(${transformNextAfter}%)`,
        opacity: '100%',
      })
    ),
  ]),
  transition('prev_prev => next', [
    style({
      transform: `translateX(${transformNextBegin}%)`,
      opacity: '0%',
    }),
    animate(
      `${transitionTime} ${transitionMode}`,
      style({
        transform: `translateX(${transformNextAfter}%)`,
        opacity: '100%',
      })
    ),
  ]),

  // prev animation
  transition(`void => prev`, [
    style({
      transform: `translateX(${transformPrevBegin}%)`,
      opacity: '0%',
    }),
    animate(
      `${transitionTime} ${transitionMode}`,
      style({
        transform: `translateX(${transformPrevAfter}%)`,
        opacity: '100%',
      })
    ),
  ]),
  transition(`prev => prev_prev`, [
    style({
      transform: `translateX(${transformPrevBegin}%)`,
      opacity: '0%',
    }),
    animate(
      `${transitionTime} ${transitionMode}`,
      style({
        transform: `translateX(${transformPrevAfter}%)`,
        opacity: '100%',
      })
    ),
  ]),
  transition(`prev_prev => prev`, [
    style({
      transform: `translateX(${transformPrevBegin}%)`,
      opacity: '0%',
    }),
    animate(
      `${transitionTime} ${transitionMode}`,
      style({
        transform: `translateX(${transformPrevAfter}%)`,
        opacity: '100%',
      })
    ),
  ]),
  transition('next_next => prev', [
    style({
      transform: `translateX(${transformPrevBegin}%)`,
      opacity: '0%',
    }),
    animate(
      `${transitionTime} ${transitionMode}`,
      style({
        transform: `translateX(${transformPrevAfter}%)`,
        opacity: '100%',
      })
    ),
  ]),
  transition('next => prev', [
    style({
      transform: `translateX(${transformPrevBegin}%)`,
      opacity: '0%',
    }),
    animate(
      `${transitionTime} ${transitionMode}`,
      style({
        transform: `translateX(${transformPrevAfter}%)`,
        opacity: '100%',
      })
    ),
  ]),
]);
