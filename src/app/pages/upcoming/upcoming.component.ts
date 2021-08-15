import { Component, OnInit } from '@angular/core';
import { ProjectTestService } from '@pages/project/project-test.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.scss'],
})
export class UpcomingComponent implements OnInit {
  constructor(private PT: ProjectTestService) {}

  ngOnInit() {}
}
