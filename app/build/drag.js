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
    function Drag(elref) {
        this.el = elref.nativeElement;
        this.el.style.cursor = 'move';
        this.isDrop = false;
    }
    ;
    Drag.prototype.ngOnInit = function () {
        var coords = {
            x: this.transfer.x,
            y: this.transfer.y,
            w: this.transfer.w,
            h: this.transfer.h,
            mx: this.transfer.mx,
            my: this.transfer.my
        };
        this.style = {
            position: 'absolute',
            width: coords.w + 'px',
            height: coords.h + 'px',
            left: coords.mx - coords.w / 2 + 'px',
            top: coords.my - coords.h / 2 + 'px'
        };
        this.mouse = {
            x: coords.mx,
            y: coords.my
        };
        this.pos = {
            left: coords.mx - coords.w / 2,
            top: coords.my - coords.h / 2,
        };
    };
    ;
    Drag.prototype.ngOnChanges = function () {
        this.ngOnInit();
        this.isDrop = false;
    };
    ;
    Drag.prototype.update = function (mouse) {
        var dx = mouse.x - this.mouse.x, dy = mouse.y - this.mouse.y;
        this.pos.left = this.pos.left + dx;
        this.pos.top = this.pos.top + dy;
        this.style.left = this.pos.left + 'px';
        this.style.top = this.pos.top + 'px';
        this.mouse = mouse;
    };
    ;
    Drag.prototype.imgDrag = function () {
        console.log('img-drag');
        return false;
    };
    ;
    Drag.prototype.mousedown = function ($event) {
        $event.preventDefault();
    };
    ;
    Drag.prototype.mousemove = function ($event) {
        $event.preventDefault();
        var mouse = {
            x: $event.clientX,
            y: $event.clientY
        };
        this.update(mouse);
    };
    ;
    Drag.prototype.mouseup = function () {
        this.isDrop = true;
    };
    ;
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Drag.prototype, "transfer", void 0);
    Drag = __decorate([
        core_1.Component({
            selector: 'drag',
            template: "<div class=\"v-drag-video\"\n                    *ngIf=\"transfer.type==='video' && !isDrop\"\n                    [ngStyle]=\"style\"\n                    (mousedown)=\"mousedown($event)\"\n                    (mousemove)=\"mousemove($event)\"\n                    (mouseup)=\"mouseup()\">\n                    <img src=\"{{transfer.data.preview}}\"\n                        (mouseover)=\"imgDrag()\">\n                    <p class=\"v-drag-title\">{{transfer.data.title}}</p>\n                    <p class=\"v-drag-time\">{{transfer.data.duration | secondFormat}}</p>\n                </div>\n                <div class=\"v-drag-video\"\n                    *ngIf=\"transfer.type==='image' && !isDrop\"\n                    [ngStyle]=\"style\"\n                    (mousemove)=\"mousemove($event)\"\n                    (mouseup)=\"mouseup()\">\n                    <img src=\"{{transfer.data.preview}}\"\n                        (mouseover)=\"imgDrag()\">\n                    <p class=\"v-drag-title\">{{transfer.data.title}}</p>\n                </div>\n                <div class=\"v-drag-audio\"\n                    *ngIf=\"transfer.type==='audio' && !isDrop\"\n                    [ngStyle]=\"style\"\n                    (mousedown)=\"mousedown($event)\"\n                    (mousemove)=\"mousemove($event)\"\n                    (mouseup)=\"mouseup()\">\n                    <span>{{transfer.data.title}}</span>\n                    <span>{{transfer.data.duration | secondFormat}}</span>\n                </div>"
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], Drag);
    return Drag;
}());
exports.Drag = Drag;
;
