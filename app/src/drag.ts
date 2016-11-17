import {Component, Input} from '@angular/core';

@Component({
    selector: 'drag',
    template: `<div class="v-drag-video"
                    *ngIf="transfer.type==='video'"
                    (mouseover)="mouseover()"
                    (mousedown)="mousedown()"
                    (mousemove)="mousemove()"
                    (mouseup)="mouseup()">
                    <img src="{{transfer.data.preview}}">
                    <p class="v-drag-title">{{transfer.data.title}}</p>
                    <p class="v-drag-time">{{transfer.data.duration | secondFormat}}</p>
                </div>
                <div class="v-drag-video"
                    *ngIf="transfer.type==='image'"
                    (mouseover)="mouseover()"
                    (mousedown)="mousedown()"
                    (mousemove)="mousemove()"
                    (mouseup)="mouseup()">
                    <img src="{{transfer.data.preview}}">
                    <p class="v-drag-title">{{transfer.data.title}}</p>
                </div>
                <div class="v-drag-audio"
                    *ngIf="transfer.type==='audio'"
                    (mouseover)="mouseover()"
                    (mousedown)="mousedown()"
                    (mousemove)="mousemove()"
                    (mouseup)="mouseup()">
                    <span>{{transfer.data.title}}</span>
                    <span>{{transfer.data.duration | secondFormat}}</span>
                </div>`
})
export class Drag {
    @Input()
    transfer: {};

    mouseover() {
        console.log('over');
    };
    mousedown() {
        console.log(this.transfer);
    };
    mousemove() {

    };
    mouseup() {

    };
};
