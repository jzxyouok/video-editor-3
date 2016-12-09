import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-drag-item',
  templateUrl: './drag-item.component.html',
  styleUrls: ['./drag-item.component.css']
})
export class DragItemComponent implements OnInit {
    @Input() data: {};
    @Input() type: string;

    constructor() { }

    ngOnInit() {
    }

}
