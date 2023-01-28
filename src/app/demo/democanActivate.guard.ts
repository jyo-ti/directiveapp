import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {ActivatedRouteSnapshot,RouterStateSnapshot,CanActivate} from '@angular/router';
import { demoservice } from "./demo.service";

@Injectable({
providedIn:'root'
})

export class demoCanActivate implements CanActivate{
    constructor(private demoService:demoservice){

    }
canActivate(Route : ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<boolean>|boolean{
return this.demoService.isLogin();
}
}