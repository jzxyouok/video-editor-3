import { Component, OnInit, Input, Output, ElementRef, EventEmitter, AfterViewInit } from '@angular/core';
import { CoordsService } from '../../services/coords.service';

@Component({
  selector: 'app-drag-item',
  templateUrl: './drag-item.component.html',
  styleUrls: ['./drag-item.component.css']
})
export class DragItemComponent implements AfterViewInit {
    @Input() data: {};
    @Input() type: string;

    isMouseDown: boolean = false;
    coordService: CoordsService;
    el: HTMLElement;
    element = null;
    constructor(coord: CoordsService, el: ElementRef) {
        this.coordService = coord;
        this.el = el.nativeElement;
    }

    ngAfterViewInit() {
        this.element = this.el.children[0];
    }

    mousedown() {
        this.isMouseDown = true;
    }

    mousemove(event) {
        event.preventDefault();
        if (this.isMouseDown) {
            this.dragTransfer.emit({
                mouseCoords: this.coordService.getMouseCoords(event),
                size: this.coordService.getElementCoords(this.element),
                dragType: this.type,
                dragData: this.data,
                isActive: true
            });
        }
    }

    mouseleave() {
        this.isMouseDown = false;
    }

    mouseup() {
        this.isMouseDown = false;
    }

    @Output() dragTransfer = new EventEmitter();
}
