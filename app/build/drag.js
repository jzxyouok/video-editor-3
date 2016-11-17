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
        console.log(this.transfer);
    };
    ;
    Drag.prototype.mousemove = function () {
    };
    ;
    Drag.prototype.mouseup = function () {
    };
    ;
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Drag.prototype, "transfer", void 0);
    Drag = __decorate([
        core_1.Component({
            selector: 'drag',
            template: "<div class=\"v-drag-video\"\n                    *ngIf=\"transfer.type==='video'\"\n                    (mouseover)=\"mouseover()\"\n                    (mousedown)=\"mousedown()\"\n                    (mousemove)=\"mousemove()\"\n                    (mouseup)=\"mouseup()\">\n                    <img src=\"{{transfer.data.preview}}\">\n                    <p class=\"v-drag-title\">{{transfer.data.title}}</p>\n                    <p class=\"v-drag-time\">{{transfer.data.duration | secondFormat}}</p>\n                </div>\n                <div class=\"v-drag-video\"\n                    *ngIf=\"transfer.type==='image'\"\n                    (mouseover)=\"mouseover()\"\n                    (mousedown)=\"mousedown()\"\n                    (mousemove)=\"mousemove()\"\n                    (mouseup)=\"mouseup()\">\n                    <img src=\"{{transfer.data.preview}}\">\n                    <p class=\"v-drag-title\">{{transfer.data.title}}</p>\n                </div>\n                <div class=\"v-drag-audio\"\n                    *ngIf=\"transfer.type==='audio'\"\n                    (mouseover)=\"mouseover()\"\n                    (mousedown)=\"mousedown()\"\n                    (mousemove)=\"mousemove()\"\n                    (mouseup)=\"mouseup()\">\n                    <span>{{transfer.data.title}}</span>\n                    <span>{{transfer.data.duration | secondFormat}}</span>\n                </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], Drag);
    return Drag;
}());
exports.Drag = Drag;
;
