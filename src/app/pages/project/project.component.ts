import { Overlay, OverlayContainer, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SnackbarService } from '@features/snackbar/services/snackbar.service';
import { GreetingSnackbarComponent } from '@shared/components/greeting-snackbar/greeting-snackbar.component';
import { ProjectsQuery } from '@stores/projects';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ProjectNotFoundComponent } from './components';
import { DisplayTodosMenuComponent } from './components/display-todos-menu/display-todos-menu.component';

@Component({
  selector: 't-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  project$ = this.projectsQuery.selectRouteProject();
  ref: OverlayRef;
  delay$ = of(true).pipe(delay(10));

  constructor(
    private snackbarService: SnackbarService,
    private projectsQuery: ProjectsQuery,
    private activatedRoute: ActivatedRoute,
    private o: OverlayContainer,
    private overlay: Overlay,
  ) {}

  ngOnInit(): void {
    // this.projectsQuery.selectRouteProject()
    // .subscribe(v => console.log(v));
  }

  testOverlay() {
    console.log(document.body);
    this.ref = this.overlay.create({
      positionStrategy: this.overlay.position().flexibleConnectedTo(document.body).withPositions([{
        originX: 'center',
        originY: 'center',
        overlayY: 'center',
        overlayX: 'center',
      }]),
    });
    this.ref.attach(new ComponentPortal(ProjectNotFoundComponent));
  }

  clear() {
    this.ref.dispose();
  }

  open(): void {
    // this.snackbarService.open({
    //   data: {
    //     message: 'Hello',
    //     action: 'close',
    //   },
    //   duration: 3500,
    // });
    this.snackbarService.openFromComponent(GreetingSnackbarComponent, {
      disuseContainerTheme: true,
      disuseContainerAnimation: true,
      data: {
        message: `So far, we've learned simple animations of single HTML elements. Angular also lets you animate coordinated sequences, such as an entire grid or list of elements as they enter and leave a page. You can choose to run multiple animations in parallel, or run discrete animations sequentially, one following another.`,
      },
    });
  }

  getProject() {
    // this.activatedRoute.params.subscribe(console.log);
  }
}
