"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var Panel = (function () {
    function Panel(http) {
        // tab索引
        this.tabIndex = 1;
        // 列表数据
        this.list = [];
        this.http = http;
        this.url = 'app/source/data/video.json';
        this.getList();
    }
    Panel.prototype.getList = function () {
        var _this = this;
        this.http.get(this.url)
            .map(function (resp) { return resp.json(); })
            .subscribe(function (list) { return _this.list = list; });
    };
    ;
    ;
    Panel.prototype.switchTab = function (index) {
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
    ;
    Panel = __decorate([
        core_1.Component({
            selector: 'panel',
            templateUrl: 'app/templates/panel.html'
        }),
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], Panel);
    return Panel;
}());
exports.Panel = Panel;
;
