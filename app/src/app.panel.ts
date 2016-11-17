import {Component, Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'panel',
    templateUrl: 'app/templates/panel.html'
})

@Injectable()
export class Panel {
    // tab索引
    tabIndex = 1;
    // http对象
    http: Http;
    // 列表API
    url: string;
    // 列表数据
    list = [];

    transfer: {};

    getList() {
        this.http.get(this.url)
            .map(resp => resp.json())
            .subscribe(list => this.list = list);
    };

    constructor(http: Http) {
        this.http = http;
        this.url = 'app/source/data/video.json';
        this.getList();
    };
    switchTab(index) {
        switch (index) {
            case 1:
                this.tabIndex = 1;
                this.url = 'app/source/data/video.json';
                break;
            case 2:
                this.tabIndex = 2;
                this.url = 'app/source/data/image.json';
                break;
            case 3:
                this.tabIndex = 3;
                this.url = 'app/source/data/audio.json';
                break;
            case 4:
                this.tabIndex = 4;
                break;
            case 5:
                this.tabIndex = 5;
                break;
            default:
                this.tabIndex = 1;
        }
        this.getList();
    };
    output(transfer) {
        this.transfer = transfer;
    };
};
