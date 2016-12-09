import { Component, OnInit } from '@angular/core';

import { PanelDataService } from '../panel-data.service';

@Component({
    selector: 'app-panel',
    templateUrl: './panel.component.html',
    styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
    tabIndex: number;
    list = [];
    dataService: PanelDataService;

    constructor(ds: PanelDataService) {
        console.log(ds);
        this.tabIndex = 1;
        this.list = ds.getVideoList();
    }

    private getDataByIndex(index: number) {
        switch (index) {
            case 1:
                this.list = this.dataService.getVideoList();
                break;
            case 2:
                this.list = this.dataService.getPictureList();
                break;
            case 3:
                this.list = this.dataService.getAudioList();
                break;
            default:
                this.list = [];
        }
    }

    switchTab(index) {
        this.tabIndex = index;
        this.getDataByIndex(index);
    }

    ngOnInit() {}

}
