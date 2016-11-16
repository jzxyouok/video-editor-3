import {Component, Input} from '@angular/core';

@Component({
    selector: 'drag',
    template: `<div class="v-ct-item"
                    *ngIf="type==='video'"
                    (mouseover)="mouseover()"
                    (mousedown)="mousedown()"
                    (mousemove)="mousemove()"
                    (mouseup)="mouseup()">
                    <img src="{{data.preview}}">
                    <p class="v-ct-title">{{data.title}}</p>
                    <p class="v-ct-time">{{data.duration | secondFormat}}</p>
                </div>
                <div class="v-ct-item"
                    *ngIf="type==='image'"
                    (mouseover)="mouseover()"
                    (mousedown)="mousedown()"
                    (mousemove)="mousemove()"
                    (mouseup)="mouseup()">
                    <img src="{{data.preview}}">
                    <p class="v-ct-title">{{data.title}}</p>
                </div>
                <div class="v-ct-audio-item"
                    *ngIf="type==='audio'"
                    (mouseover)="mouseover()"
                    (mousedown)="mousedown()"
                    (mousemove)="mousemove()"
                    (mouseup)="mouseup()">
                    <svg width="14" height="14">
                        <use xlink:href="#play-audio"></use>
                    </svg>
                    <span>{{data.title}}</span>
                    <span>{{data.duration | secondFormat}}</span>
                </div>`
})
export class Drag {
    @Input()
    activeType: string;
    @Input()
    dataTransfer: {};

    mouseover() {
        console.log('over');
    };
    mousedown() {

    };
    mousemove() {
        console.log(this.dataTransfer);
    };
    mouseup() {

    };
};
