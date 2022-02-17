import { animate, style, transition, trigger } from '@angular/animations';

export const appearSnackbarAnimation = trigger('appearSnackbar', [
  transition('void => *', [style({ opacity: 0 }), animate(150)]),
]);
