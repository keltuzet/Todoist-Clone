import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectorRef,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appSidebarResizer]',
  host: {
    '(mousedown)': 'handleMouseDown($event)',
  },
})
export class SidebarResizerDirective implements OnDestroy, OnInit {
  @Input() private sidebar: ElementRef<HTMLElement>;

  @Output() expandedWidthChange = new EventEmitter<number>();

  private minWidth = 220;
  private maxWidth = 450;
  private sidebarWidth: number | null;
  private mouseDownX: number | null;
  private transitionDurationCache: string;

  constructor(@Inject(DOCUMENT) private document: Document, private changeDetectorRef: ChangeDetectorRef) {
    this.document.addEventListener('mousemove', this.handleMouseMove);
    this.document.addEventListener('mouseup', this.handleMouseUp);
  }

  ngOnInit() {
    this.changeDetectorRef.detach();
  }

  ngOnDestroy() {
    this.document.removeEventListener('mousemove', this.handleMouseMove);
    this.document.removeEventListener('mouseup', this.handleMouseUp);
  }

  handleMouseDown(event: MouseEvent) {
    this.sidebarWidth = this.sidebar.nativeElement.offsetWidth;
    this.mouseDownX = event.pageX;
    this.transitionDurationCache = this.sidebar.nativeElement.style.transitionDuration;
    this.sidebar.nativeElement.style.transitionDuration = '0s';
    event.preventDefault();
  }

  handleMouseMove = (event: MouseEvent) => {
    if (this.mouseDownX) {
      const diffY = event.pageX - this.mouseDownX;
      const width = this.sidebarWidth + diffY;
      if (this.minWidth <= width && this.maxWidth >= width) {
        this.sidebar.nativeElement.style.width = width + 'px';
      }
    }
  };

  handleMouseUp = () => {
    if (this.mouseDownX) {
      this.expandedWidthChange.emit(this.sidebar.nativeElement.offsetWidth);
      this.sidebar.nativeElement.style.transitionDuration = this.transitionDurationCache;
    }
    this.sidebarWidth = null;
    this.mouseDownX = null;
  };
}
