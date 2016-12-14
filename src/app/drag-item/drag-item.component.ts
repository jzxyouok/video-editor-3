import { Component, OnInit, Input, Output, ElementRef, EventEmitter } from '@angular/core';
import { CoordsService } from '../coords.service';

@Component({
  selector: 'app-drag-item',
  templateUrl: './drag-item.component.html',
  styleUrls: ['./drag-item.component.css']
})
export class DragItemComponent implements OnInit {
    @Input() data: {};
    @Input() type: string;

    isMouseDown: boolean = false;
    coordService: CoordsService;
    el: ElementRef;

    constructor(coord: CoordsService, el: ElementRef) {
        this.coordService = coord;
        this.el = el;
    }

    ngOnInit() {}

    mousedown() {
        this.isMouseDown = true;
    }

    mousemove(event) {
        event.preventDefault();
        if (this.isMouseDown) {
            this.dragTransfer.emit({
                coord: this.coordService.getMouseCoords(event),
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
