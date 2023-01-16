
import { ElementRef,Renderer2 ,Directive,HostListener,HostBinding }from "@angular/core";

@Directive ({
    selector:'[myrenderer]'
})

export class strucrenddir{
    constructor(private el:ElementRef,private ren:Renderer2){
ren.setStyle(el.nativeElement,'background-color','orange');
    }
    @HostListener('mouseenter') mus(event:Event){
        this.ren.setStyle(this.el.nativeElement,'color','green')
    }

    @HostBinding('style.backgroundColor') color: string='';
    @HostListener('mouseleave') musleave(event:Event){
       this.ren.setStyle(this.el.nativeElement,'backgroundColor','pink'); 
       this.color='blue';
    }
}