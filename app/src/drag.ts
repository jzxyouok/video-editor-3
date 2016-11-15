import {Directive, ElementRef, Input, Output, Injectable, HostListener, Renderer} from '@angular/core';
@Directive({
    selector: '[drag]'
})
@Injectable()
export class Drag{
    el: any;
    render: Renderer;

    // 指令元素
    constructor(elref: ElementRef, render: Renderer) {
        this.el = elref.nativeElement;
        this.render = render;
    };

    // 指令输入数据
    @Input()
    data: {}

    // 鼠标悬浮事件
    @HostListener('mouseover')
    onmouseover() {
        this.el.style.cursor = 'move';
    };
    // 鼠标按下事件
    @HostListener('mousedown')
    onmousedown() {
        var em = this.render.createElement('body', 'dragger');
        console.log(em);
    };
    // 鼠标移动事件
    @HostListener('mousemove')
    onmousemove() {

    };
}