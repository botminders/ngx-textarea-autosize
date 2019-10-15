import { AfterViewInit, ElementRef, DoCheck, Renderer2 } from '@angular/core';
export declare class AutosizeDirective implements AfterViewInit, DoCheck {
    private elem;
    private renderer;
    overflow: string;
    rows: number;
    constructor(elem: ElementRef, renderer: Renderer2);
    ngAfterViewInit(): void;
    ngDoCheck(): void;
    resize(): void;
    private setHeight;
}
