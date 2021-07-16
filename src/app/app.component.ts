import { Component } from '@angular/core';
import { IconRegistrarService } from '@shared/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todos';
  manualChangeDev = 'trata-ta';

  constructor(private iconRegistrarService: IconRegistrarService) {
    iconRegistrarService.init();
    console.log('inited');
  }
}
