import { trigger, state, style, transition, animate, AnimationEvent } from '@angular/animations';
import { ChangeDetectionStrategy, Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-expansion-panel-body',
  templateUrl: './expansion-panel-body.component.html',
  styleUrls: ['./expansion-panel-body.component.scss'],
  animations: [
    trigger('expansionPanelExpand', [
      state(
        'hidden',
        style({
          height: '0',
          overflow: 'hidden',
        }),
      ),
      state(
        'expanded',
        style({
          height: '*',
        }),
      ),
      transition('expanded <=> hidden', [animate('220ms ease')]),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpansionPanelBodyComponent {
  @HostBinding('@expansionPanelExpand') state: 'expanded' | 'hidden';
  @HostListener('@expansionPanelExpand.done', ['$event']) handleAnimationEnd(event: AnimationEvent) {
    if (event.toState === 'expanded') {
      event.element.style.overflow = 'visible';
    }
  }
}
