import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import { CoordsService } from '../../services/coords.service';

@Component({
  selector: 'app-drag-move-item',
  templateUrl: './drag-move-item.component.html',
  styleUrls: ['./drag-move-item.component.css']
})
export class DragMoveItemComponent implements OnInit {
    @Input() transfer;

    @Output() dragItemMoving = new EventEmitter();

    coordsService: CoordsService;
    left: string = '0px';
    top: string = '0px';
    isDrop: boolean;
    width: string;

    constructor(coordsService: CoordsService) {
        this.coordsService = coordsService;
        this.isDrop = false;
    }

    /**
     * @description Set drag item's position when moving.
     * @param {Object} mc Mouse position when moving.
     */
    setDragMoveItemPosition(mc, size) {
        this.left = Math.floor(mc.mx - size.ex / 2) + 'px';
        this.top = Math.floor(mc.my - size.ey / 2) + 'px';
    }

    ngOnInit() {
        var mc = this.transfer.mouseCoords,
            size = this.transfer.size;
        this.setDragMoveItemPosition(mc, size);
        if (this.transfer.dragType === 'audio') {
            this.width = this.transfer.size.ex + 'px';
        }
    }

    mouseover(event) {
        event.preventDefault();
        this.dragItemMoving.emit(true);
    }
    mousemove(event) {
        event.preventDefault();
        var mc = this.coordsService.getMouseCoords(event),
            size = this.transfer.size;
        if (!this.isDrop) {
            this.setDragMoveItemPosition(mc, size);
            this.dragItemMoving.emit(true);
        }
    }
    mouseleave() {}
    mouseup() {
        this.isDrop = true;
        this.transfer.isActive = false;
        this.dragItemMoving.emit(false);
    }

}
