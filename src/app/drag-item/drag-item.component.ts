import { Component, OnInit, Input, Output, ElementRef } from '@angular/core';
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
    isMoveActive: boolean = false;
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
        this.coord = this.coordService.getMouseCoords(event);
        this.dragType = this.type;
        this.dragData = this.data;
        this.isMoveActive = true;
    }

    mouseleave() {

    }

    mouseup() {

    }

    @Output() dragData;
    @Output() dragType;
    @Output() coord;
}
