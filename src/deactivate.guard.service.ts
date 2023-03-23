import {Observable} from 'rxjs';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree} from '@angular/router';
export interface ideactivateguard{
   exit():Observable<boolean>|Promise<boolean>|boolean; 
}
export class deactivate implements CanDeactivate<ideactivateguard>{
canDeactivate(component:ideactivateguard,currentRoute:ActivatedRouteSnapshot,currentState:RouterStateSnapshot
 , nextState?: RouterStateSnapshot 
    ):boolean|Observable<boolean>|Promise<boolean>{
return component.exit();
}
}