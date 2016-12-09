import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
    tabIndex: number;
    constructor() {
        this.tabIndex = 1;
    }

    switchTab(index) {
        this.tabIndex = index;
    }

    ngOnInit() {}

}
