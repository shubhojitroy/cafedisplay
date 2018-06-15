import { trigger, state, style, transition, animate } from '@angular/animations';

export const pageTransition =
  trigger('transition', [
      state('in', style({transform: 'translateY(0)', opacity: '0'})),

      transition('void => *', [
          style({transform: 'translateY(-50px)', opacity: '1'}),
          animate(500)
      ])
  ]);

export class Animations {
}
