import { Injectable } from '@angular/core';
import { SvgIconRegistryService } from 'angular-svg-icon';
import { forkJoin } from 'rxjs';

import { SVG_ICONS } from '@shared/const';

@Injectable({
  providedIn: 'root',
})
export class IconRegistrarService {
  constructor(private iconReg: SvgIconRegistryService) {}

  init(): void {
    forkJoin(SVG_ICONS.map(icon => this.iconReg.loadSvg(`/assets/img/svg/${icon}.svg`, icon))).subscribe();
  }
}
