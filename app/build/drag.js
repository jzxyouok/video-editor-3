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
    // 指令元素
    function Drag(elref, render) {
        this.el = elref.nativeElement;
        this.render = render;
    }
    ;
    // 鼠标悬浮事件
    Drag.prototype.onmouseover = function () {
        this.el.style.cursor = 'move';
    };
    ;
    // 鼠标按下事件
    Drag.prototype.onmousedown = function () {
        var em = this.render.createElement('body', 'dragger');
        console.log(em);
    };
    ;
    // 鼠标移动事件
    Drag.prototype.onmousemove = function () {
    };
    ;
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Drag.prototype, "data", void 0);
    __decorate([
        core_1.HostListener('mouseover'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], Drag.prototype, "onmouseover", null);
    __decorate([
        core_1.HostListener('mousedown'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], Drag.prototype, "onmousedown", null);
    __decorate([
        core_1.HostListener('mousemove'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], Drag.prototype, "onmousemove", null);
    Drag = __decorate([
        core_1.Directive({
            selector: '[drag]'
        }),
        core_1.Injectable(), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], Drag);
    return Drag;
}());
exports.Drag = Drag;
