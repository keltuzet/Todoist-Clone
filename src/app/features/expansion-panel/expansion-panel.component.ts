import { ChangeDetectionStrategy, Component, ContentChild, Input, OnInit } from '@angular/core';
import { ExpansionPanelBodyComponent, ExpansionPanelHeaderComponent } from './components';
import { ExpansionPanelService } from './expansion-panel.service';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpansionPanelComponent implements OnInit {
  @Input() tag: string;
  @Input() expanded: boolean;

  @ContentChild(ExpansionPanelBodyComponent, { static: true }) private body: ExpansionPanelBodyComponent;
  @ContentChild(ExpansionPanelHeaderComponent, { static: true }) private header: ExpansionPanelHeaderComponent;

  constructor(private panelService: ExpansionPanelService) {}

  ngOnInit(): void {
    if (!this.tag) throw new Error('The property "tag" is required');

    this.panelService.create(this.tag, this.expanded);
    const state = this.panelService.get(this.tag);
    this.header.expand$ = state;
    state.subscribe((expand) => {
      expand ? this.expandPanel() : this.collapsePanel();
    });

    this.header.btnClick$.subscribe(() => this.togglePanel());
  }

  collapsePanel() {
    this.body.state = 'hidden';
  }

  expandPanel() {
    this.body.state = 'expanded';
  }

  togglePanel() {
    this.panelService.toggle(this.tag);
  }
}
