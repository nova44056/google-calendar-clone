import { animate, style, transition, trigger } from '@angular/animations';

const transitionTime = '100ms';
const transitionMode = 'ease-in-out';

const transformNextBegin = 2;
const transformNextAfter = 0;

const transformPrevBegin = -2;
const transformPrevAfter = 0;

const animationSlideInBegin = {
  transform: `translateX(${transformNextBegin}%)`,
  opacity: '0%',
};
const animationSlideInAfter = {
  transform: `translateX(${transformNextAfter}%)`,
  opacity: '100%',
};

const animationSlideOutBegin = {
  transform: `translateX(${transformPrevBegin}%)`,
  opacity: '0%',
};

const animationSlideOutAfter = {
  transform: `translateX(${transformPrevAfter}%)`,
  opacity: '100%',
};

export const monthCalendarAnimation = trigger('slideInOut', [
  // next animation
  transition(`void => next`, [
    style(animationSlideInBegin),
    animate(
      `${transitionTime} ${transitionMode}`,
      style(animationSlideInAfter)
    ),
  ]),
  transition('next => next_next', [
    style(animationSlideInBegin),
    animate(
      `${transitionTime} ${transitionMode}`,
      style(animationSlideInAfter)
    ),
  ]),
  transition('next_next => next', [
    style(animationSlideInBegin),
    animate(
      `${transitionTime} ${transitionMode}`,
      style(animationSlideInAfter)
    ),
  ]),
  transition('prev => next', [
    style(animationSlideInBegin),
    animate(
      `${transitionTime} ${transitionMode}`,
      style(animationSlideInAfter)
    ),
  ]),
  transition('prev_prev => next', [
    style(animationSlideInBegin),
    animate(
      `${transitionTime} ${transitionMode}`,
      style(animationSlideInAfter)
    ),
  ]),

  // prev animation
  transition(`void => prev`, [
    style(animationSlideOutBegin),
    animate(
      `${transitionTime} ${transitionMode}`,
      style(animationSlideOutAfter)
    ),
  ]),
  transition(`prev => prev_prev`, [
    style(animationSlideOutBegin),
    animate(
      `${transitionTime} ${transitionMode}`,
      style(animationSlideOutAfter)
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
    style(animationSlideOutBegin),
    animate(
      `${transitionTime} ${transitionMode}`,
      style(animationSlideOutAfter)
    ),
  ]),
  transition('next => prev', [
    style(animationSlideOutBegin),
    animate(
      `${transitionTime} ${transitionMode}`,
      style(animationSlideOutAfter)
    ),
  ]),
]);
