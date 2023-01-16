import {Directive,ElementRef} from '@angular/core';
@Directive({
    selector:'[style]'
})

export class colorDir{
    constructor(private el:ElementRef){
el.nativeElement.style.color='red';
    }
}