import { Directive, Input, ElementRef, Renderer, OnInit } from '@angular/core';

@Directive({
  selector: '[appDynamicImage]'
})
export class DynamicImageDirective implements OnInit{
    @Input('appDynamicImage') url: string;
    el: ElementRef;
    render: Renderer;

    constructor(el: ElementRef, render: Renderer) {
        this.el = el;
        this.render = render;
    }
    ngOnInit() {
        this.render.setElementStyle(this.el.nativeElement, 'backgroundImage', 'url( '+ this.url + ')');
    }
}
