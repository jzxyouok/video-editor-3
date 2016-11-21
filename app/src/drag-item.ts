import {Component, Injectable, ElementRef, Input,
    Output, EventEmitter} from '@angular/core';
@Component({
    selector: 'drag-item',
    template: `<div *ngIf="type==='video'"
                    (mouseover)="mouseover()"
                    (mousedown)="mousedown()"
                    (mousemove)="mousemove($event)"
                    (mouseleave)="mouseleave()"
                    (mouseup)="mouseup()">
                    <img src="{{data.preview}}">
                    <p class="v-ct-title">{{data.title}}</p>
                    <p class="v-ct-time">{{data.duration | secondFormat}}</p>
                </div>
                <div *ngIf="type==='image'"
                    (mouseover)="mouseover()"
                    (mousedown)="mousedown()"
                    (mousemove)="mousemove($event)"
                    (mouseleave)="mouseleave()"
                    (mouseup)="mouseup()">
                    <img src="{{data.preview}}">
                    <p class="v-ct-title">{{data.title}}</p>
                </div>
                <div class="v-ct-audio-item"
                    *ngIf="type==='audio'"
                    (mouseover)="mouseover()"
                    (mousedown)="mousedown()"
                    (mousemove)="mousemove($event)"
                    (mouseleave)="mouseleave()"
                    (mouseup)="mouseup()">
                    <svg width="14" height="14">
                        <use xlink:href="#play-audio"></use>
                    </svg>
                    <span>{{data.title}}</span>
                    <span>{{data.duration | secondFormat}}</span>
                </div>`
})
@Injectable()
export class DragItem{
    el: HTMLElement;
    elInfo = {x: 0, y: 0, w: 0, h: 0};
    active: boolean;

    constructor(elref: ElementRef) {
        this.el = elref.nativeElement;
    };

    // 组件输入数据
    @Input()
    data: {};
    @Input()
    type: string;

    @Output()
    output:EventEmitter<any> = new EventEmitter();

    /**
     * @description 获取元素尺寸和位置
     * @param  {HTMLElement} el 当前指令对应元素
     * @return {Object}    元素尺寸和绝对位置
     */
    getElementSize(el) {
        return {
            w: el.offsetWidth,
            h: el.offsetHeight,
            x: el.offsetLeft,
            y: el.offsetTop
        };
    };

    /**
     * @description 获取鼠标的绝对位置
     * @param  {Object} event 事件对象
     * @return {Object}       鼠标位置
     */
    getMousePosition(event) {
        return {
            mx: event.clientX,
            my: event.clientY
        };
    };

    mouseover() {
        this.el.style.cursor = 'move';
    };
    mousedown() {
        this.active = true;
        this.elInfo = this.getElementSize(this.el);
    };
    mousemove(e) {
        var mouse = this.getMousePosition(e);
        e.preventDefault();
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
    mouseleave() {
        this.active = false;
    };
    mouseup() {
        this.active = false;
    };
};
