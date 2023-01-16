import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router'
import {Observable} from 'rxjs';
import { Injectable } from '@angular/core';
import {serviceauth} from  '../src/auth.service';
@Injectable()
export class guardservice implements CanActivate{
    constructor(private auth:serviceauth,private router:Router){

    }
canActivate(Route:ActivatedRouteSnapshot, state:RouterStateSnapshot):boolean|Promise<boolean>|Observable<any>{
 return this.auth.login1().then((loginstatus:any)=>{
    if(loginstatus){
        return true; 
     }
     else{
     this.router.navigate(['/']);
     return false;
     }
  });
   
}

canActivateChild(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean>|Promise<boolean>|boolean{
return this.canActivate(route,state);
}
}