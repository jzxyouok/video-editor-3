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
var Player = (function () {
    function Player() {
        this.hover = false;
        this.pause = true;
    }
    // mouseover() {
    //     this.hover = true;
    // };
    // mouseleave() {
    //     this.hover = false;
    // };
    Player.prototype.triggerPlay = function () {
        this.pause = !this.pause;
    };
    ;
    Player = __decorate([
        core_1.Component({
            selector: 'player',
            template: "<div class=\"v-ct-player\">\n                    <video src=\"app/source/videos/cangying-1min.mp4\" width=\"0\" height=\"0\" autoplay></video>\n                    <canvas id=\"v-canvas-origin\" width=\"640\" height=\"360\"></canvas>\n                    <canvas id=\"v-canvas\" width=\"640\" height=\"360\"></canvas>\n                    <audio src=\"\"></audio>\n                    <div class=\"v-player-controls\">\n                        <svg width='30' height=\"40\"\n                            (mouseover)=\"hover = true\"\n                            (mouseleave)=\"hover = false\"\n                            (click)=\"triggerPlay()\">\n                            <use xlink:href=\"#play\" *ngIf=\"!hover && pause\"></use>\n                            <use xlink:href=\"#play-active\" *ngIf=\"hover && pause\"></use>\n                            <use xlink:href=\"#pause\" *ngIf=\"!hover && !pause\"></use>\n                            <use xlink:href=\"#pause-active\" *ngIf=\"hover && !pause\"></use>\n                        </svg>\n                        <svg width='30' height=\"40\">\n                            <use xlink:href=\"#volume-mute\"></use>\n                        </svg>\n                        <svg width='30' height=\"40\">\n                            <use xlink:href=\"#volume-low\"></use>\n                        </svg>\n                        <svg width='30' height=\"40\">\n                            <use xlink:href=\"#volume-medium\"></use>\n                        </svg>\n                        <svg width='30' height=\"40\">\n                            <use xlink:href=\"#volume-high\"></use>\n                        </svg>\n                    </div>\n                </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], Player);
    return Player;
}());
exports.Player = Player;
;
