import {ViewContainerRef,TemplateRef, Directive,Input} from '@angular/core';

@Directive({
    selector:'[condi]'
})

export class strucDire{
    constructor(private temp :TemplateRef<any>,private vr:ViewContainerRef){

    }
    @Input() set condi(con:boolean){
        if(con){
this.vr.createEmbeddedView(this.temp);
        }
        else{
this.vr.clear();
        }
    }
}