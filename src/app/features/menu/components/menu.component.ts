import {
  AfterViewInit,
  Component,
  ContentChildren,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { MenuRef } from '../models';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: [MenuRef],
  viewProviders: [MenuRef]
})
export class MenuComponent {
  @ViewChild('container', { static: true, read: ViewContainerRef })
  container: ViewContainerRef;

  constructor(private ref: MenuRef) {
    console.log(ref);
  }
}
