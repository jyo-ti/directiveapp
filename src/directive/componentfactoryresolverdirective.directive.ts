import { Directive, ViewContainerRef } from "@angular/core";
@Directive({
    selector:'[ComponentFactoryResolverr]'
})
export class directivecomponentfactory{
    public constructor(public viewContainerRef:ViewContainerRef){

    }
}