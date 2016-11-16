import {Component, Injectable, ElementRef, Input, Output} from '@angular/core';
@Component({
    selector: 'drag-item',
    template: `<div class="v-ct-item"
                    *ngIf="type==='video'"
                    (mouseover)="mouseover()"
                    (mousedown)="mousedown()"
                    (mousemove)="mousemove()"
                    (mouseup)="mouseup()"
                    drag
                    [dataTransfer]="data"
                    [activeType]="type">
                    <img src="{{data.preview}}">
                    <p class="v-ct-title">{{data.title}}</p>
                    <p class="v-ct-time">{{data.duration | secondFormat}}</p>
                </div>
                <div class="v-ct-item"
                    *ngIf="type==='image'"
                    (mouseover)="mouseover()"
                    (mousedown)="mousedown()"
                    (mousemove)="mousemove()"
                    (mouseup)="mouseup()"
                    drag
                    [dataTransfer]="data"
                    [activeType]="type">
                    <img src="{{data.preview}}">
                    <p class="v-ct-title">{{data.title}}</p>
                </div>
                <div class="v-ct-audio-item"
                    *ngIf="type==='audio'"
                    (mouseover)="mouseover()"
                    (mousedown)="mousedown()"
                    (mousemove)="mousemove()"
                    (mouseup)="mouseup()"
                    drag
                    [dataTransfer]="data"
                    [activeType]="type">
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
    // 指令元素
    constructor(elref: ElementRef) {
        this.el = elref.nativeElement;
    };

    // 组件输入数据
    @Input()
    data: {};
    @Input()
    type: string;

    @Output()
    dataTransfer: {};
    @Output()
    activeType: string;

    mouseover() {
        this.el.style.cursor = 'move';
    };
    mousedown() {
        this.dataTransfer = this.data;
    };
    mousemove() {
        this.activeType = this.type;
    };
    mouseup() {
        this.dataTransfer = {};
        this.activeType = '';
    };
};
