import { Component, OnInit } from '@angular/core';
import { SidebarService } from '@features/sidebar';

@Component({
  selector: 'app-header-main-toolbar',
  templateUrl: './header-main-toolbar.component.html',
  styleUrls: ['./header-main-toolbar.component.scss']
})
export class HeaderMainToolbarComponent implements OnInit {

  constructor(private sidebarService: SidebarService) { }

  ngOnInit(): void {
  }

  toggleAppNavbar() {
    this.sidebarService.toggle('app-sidebar');
  }
}
