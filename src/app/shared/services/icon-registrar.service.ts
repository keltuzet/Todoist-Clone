import { Injectable } from '@angular/core';
import { SVG_ICONS } from '@shared/const/icons.const';
import { SvgIconRegistryService } from 'angular-svg-icon';
import { forkJoin, merge, zip } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IconRegistrarService {
  constructor(private iconReg: SvgIconRegistryService) {}

  init() {
    forkJoin(SVG_ICONS.map((icon) => this.iconReg.loadSvg(`/assets/img/svg/${icon}.svg`, icon))).subscribe();
  }
}
