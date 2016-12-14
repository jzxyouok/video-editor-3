import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-drag-move-item',
  templateUrl: './drag-move-item.component.html',
  styleUrls: ['./drag-move-item.component.css']
})
export class DragMoveItemComponent implements OnInit {
    @Input() transfer;

    ngOnInit() {
        // this.data = this.transfer;
    }

}
