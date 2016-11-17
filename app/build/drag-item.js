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
var DragItem = (function () {
    // 指令元素
    function DragItem(elref) {
        this.elInfo = { x: 0, y: 0, w: 0, h: 0 };
        this.output = new core_1.EventEmitter();
        this.el = elref.nativeElement;
    }
    ;
    // 获取元素尺寸和位置
    DragItem.prototype.getElementSize = function (el) {
        return {
            w: el.offsetWidth,
            h: el.offsetHeight,
            x: el.offsetLeft,
            y: el.offsetTop
        };
    };
    ;
    DragItem.prototype.getMousePosition = function (event) {
        return {
            mx: event.clientX,
            my: event.clientY
        };
    };
    ;
    DragItem.prototype.mouseover = function () {
        this.el.style.cursor = 'move';
    };
    ;
    DragItem.prototype.mousedown = function () {
        this.active = true;
        this.elInfo = this.getElementSize(this.el);
    };
    ;
    DragItem.prototype.mousemove = function (e) {
        var mouse = this.getMousePosition(e);
        if (this.active) {
            this.output.emit({
                type: this.type,
                data: this.data,
                x: this.elInfo.x,
                y: this.elInfo.y,
                w: this.elInfo.w,
                h: this.elInfo.h,
                mx: mouse.mx,
                my: mouse.my
            });
        }
    };
    ;
    DragItem.prototype.mouseleave = function () {
        this.active = false;
    };
    ;
    DragItem.prototype.mouseup = function () {
        this.active = false;
    };
    ;
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DragItem.prototype, "data", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DragItem.prototype, "type", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], DragItem.prototype, "output", void 0);
    DragItem = __decorate([
        core_1.Component({
            selector: 'drag-item',
            template: "<div *ngIf=\"type==='video'\"\n                    (mouseover)=\"mouseover()\"\n                    (mousedown)=\"mousedown()\"\n                    (mousemove)=\"mousemove($event)\"\n                    (mouseleave)=\"mouseleave()\"\n                    (mouseup)=\"mouseup()\">\n                    <img src=\"{{data.preview}}\">\n                    <p class=\"v-ct-title\">{{data.title}}</p>\n                    <p class=\"v-ct-time\">{{data.duration | secondFormat}}</p>\n                </div>\n                <div *ngIf=\"type==='image'\"\n                    (mouseover)=\"mouseover()\"\n                    (mousedown)=\"mousedown()\"\n                    (mousemove)=\"mousemove($event)\"\n                    (mouseleave)=\"mouseleave()\"\n                    (mouseup)=\"mouseup()\">\n                    <img src=\"{{data.preview}}\">\n                    <p class=\"v-ct-title\">{{data.title}}</p>\n                </div>\n                <div class=\"v-ct-audio-item\"\n                    *ngIf=\"type==='audio'\"\n                    (mouseover)=\"mouseover()\"\n                    (mousedown)=\"mousedown()\"\n                    (mousemove)=\"mousemove($event)\"\n                    (mouseleave)=\"mouseleave()\"\n                    (mouseup)=\"mouseup()\">\n                    <svg width=\"14\" height=\"14\">\n                        <use xlink:href=\"#play-audio\"></use>\n                    </svg>\n                    <span>{{data.title}}</span>\n                    <span>{{data.duration | secondFormat}}</span>\n                </div>"
        }),
        core_1.Injectable(), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], DragItem);
    return DragItem;
}());
exports.DragItem = DragItem;
;
