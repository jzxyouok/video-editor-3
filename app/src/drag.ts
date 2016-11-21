import {Component, Input, OnInit, ElementRef} from '@angular/core';

@Component({
    selector: 'drag',
    template: `<div class="v-drag-video"
                    *ngIf="transfer.type==='video' && !isDrop"
                    [ngStyle]="style"
                    (mousedown)="mousedown($event)"
                    (mousemove)="mousemove($event)"
                    (mouseup)="mouseup()">
                    <img src="{{transfer.data.preview}}"
                        (mouseover)="imgDrag()">
                    <p class="v-drag-title">{{transfer.data.title}}</p>
                    <p class="v-drag-time">{{transfer.data.duration | secondFormat}}</p>
                </div>
                <div class="v-drag-video"
                    *ngIf="transfer.type==='image' && !isDrop"
                    [ngStyle]="style"
                    (mousemove)="mousemove($event)"
                    (mouseup)="mouseup()">
                    <img src="{{transfer.data.preview}}"
                        (mouseover)="imgDrag()">
                    <p class="v-drag-title">{{transfer.data.title}}</p>
                </div>
                <div class="v-drag-audio"
                    *ngIf="transfer.type==='audio' && !isDrop"
                    [ngStyle]="style"
                    (mousedown)="mousedown($event)"
                    (mousemove)="mousemove($event)"
                    (mouseup)="mouseup()">
                    <span>{{transfer.data.title}}</span>
                    <span>{{transfer.data.duration | secondFormat}}</span>
                </div>`
})
export class Drag implements OnInit{
    style: {position: string, width: string,
        height: string, left: string, top: string};
    el: HTMLElement;
    mouse: {x: number, y: number};
    pos: {left: number, top: number};
    isDrop: boolean;
    @Input()
    transfer: {
        type: string,
        data: {},
        x: number,
        y: number,
        w: number,
        h: number,
        mx: number,
        my: number
    };
    constructor(elref: ElementRef) {
        this.el = elref.nativeElement;
        this.el.style.cursor = 'move';
        this.isDrop = false;
    };
    ngOnInit() {
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
    ngOnChanges() {
        this.ngOnInit();
        this.isDrop = false;
    };
    update(mouse: {x: number, y: number}) {
        var dx = mouse.x - this.mouse.x,
        dy = mouse.y - this.mouse.y;
        this.pos.left = this.pos.left + dx;
        this.pos.top = this.pos.top + dy;
        this.style.left = this.pos.left + 'px';
        this.style.top = this.pos.top + 'px';
        this.mouse = mouse;
    };
    imgDrag() {
        console.log('img-drag');
        return false;
    };
    mousedown($event) {
        $event.preventDefault();
    };
    mousemove($event) {
        $event.preventDefault();
        var mouse = {
            x: $event.clientX,
            y: $event.clientY
        };
        this.update(mouse);
    };
    mouseup() {
        this.isDrop = true;
    };
};
