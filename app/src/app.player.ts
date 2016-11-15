import {Component} from '@angular/core';

@Component({
    selector: 'player',
    template: `<div class="v-ct-player">
                    <video src="app/source/videos/cangying-1min.mp4" width="0" height="0" autoplay></video>
                    <canvas id="v-canvas-origin" width="640" height="360"></canvas>
                    <canvas id="v-canvas" width="640" height="360"></canvas>
                    <audio src=""></audio>
                    <div class="v-player-controls">
                        <svg width='30' height="40"
                            (mouseover)="hover = true"
                            (mouseleave)="hover = false"
                            (click)="triggerPlay()">
                            <use xlink:href="#play" *ngIf="!hover && pause"></use>
                            <use xlink:href="#play-active" *ngIf="hover && pause"></use>
                            <use xlink:href="#pause" *ngIf="!hover && !pause"></use>
                            <use xlink:href="#pause-active" *ngIf="hover && !pause"></use>
                        </svg>
                        <svg width='30' height="40">
                            <use xlink:href="#volume-mute"></use>
                        </svg>
                        <svg width='30' height="40">
                            <use xlink:href="#volume-low"></use>
                        </svg>
                        <svg width='30' height="40">
                            <use xlink:href="#volume-medium"></use>
                        </svg>
                        <svg width='30' height="40">
                            <use xlink:href="#volume-high"></use>
                        </svg>
                    </div>
                </div>`
})

export class Player {
    hover = false;
    pause = true;

    triggerPlay() {
        this.pause = !this.pause;
    };
};