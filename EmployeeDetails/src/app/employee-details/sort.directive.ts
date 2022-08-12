import { Directive, Input, ElementRef, Renderer2, HostListener } from '@angular/core';
import { Sort } from './sort';


@Directive({
    selector: '[appSort]'
})

export class sortDirective {
    @Input()
    appSort: Array<any> = [];

    constructor(private targetElem: ElementRef) { }
    @HostListener("click")
    sortData() {
        const sort = new Sort();
        const elem = this.targetElem.nativeElement;
        const order = elem.getAttribute("data-order");
        const property = elem.getAttribute("data-name");
        if(order === "desc")
        {
           var x = this.appSort?.sort(sort.startSort(property,order));
           
           elem.setAttribute("data-order","desc");
        }
        else{
            this.appSort.sort(sort.startSort(property,order));
            elem.setAttribute("data-order","desc")
        }
    }
}

