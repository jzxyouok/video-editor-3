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
var Drag = (function () {
    function Drag() {
    }
    Drag.prototype.mouseover = function () {
        console.log('over');
    };
    ;
    Drag.prototype.mousedown = function () {
    };
    ;
    Drag.prototype.mousemove = function () {
        console.log(this.dataTransfer);
    };
    ;
    Drag.prototype.mouseup = function () {
    };
    ;
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Drag.prototype, "activeType", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Drag.prototype, "dataTransfer", void 0);
    Drag = __decorate([
        core_1.Component({
            selector: 'drag',
            template: "<div class=\"v-ct-item\"\n                    *ngIf=\"type==='video'\"\n                    (mouseover)=\"mouseover()\"\n                    (mousedown)=\"mousedown()\"\n                    (mousemove)=\"mousemove()\"\n                    (mouseup)=\"mouseup()\">\n                    <img src=\"{{data.preview}}\">\n                    <p class=\"v-ct-title\">{{data.title}}</p>\n                    <p class=\"v-ct-time\">{{data.duration | secondFormat}}</p>\n                </div>\n                <div class=\"v-ct-item\"\n                    *ngIf=\"type==='image'\"\n                    (mouseover)=\"mouseover()\"\n                    (mousedown)=\"mousedown()\"\n                    (mousemove)=\"mousemove()\"\n                    (mouseup)=\"mouseup()\">\n                    <img src=\"{{data.preview}}\">\n                    <p class=\"v-ct-title\">{{data.title}}</p>\n                </div>\n                <div class=\"v-ct-audio-item\"\n                    *ngIf=\"type==='audio'\"\n                    (mouseover)=\"mouseover()\"\n                    (mousedown)=\"mousedown()\"\n                    (mousemove)=\"mousemove()\"\n                    (mouseup)=\"mouseup()\">\n                    <svg width=\"14\" height=\"14\">\n                        <use xlink:href=\"#play-audio\"></use>\n                    </svg>\n                    <span>{{data.title}}</span>\n                    <span>{{data.duration | secondFormat}}</span>\n                </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], Drag);
    return Drag;
}());
exports.Drag = Drag;
;
