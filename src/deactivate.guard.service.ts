import {Observable} from 'rxjs';
import {ActivatedRoute, ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';
export interface ideactivateguard{
   exit():Observable<boolean>|Promise<boolean>|boolean; 
}
export class deactivate implements CanDeactivate<ideactivateguard>{
canDeactivate(component:ideactivateguard,state:ActivatedRouteSnapshot,currentroute:RouterStateSnapshot
 , nextroute: RouterStateSnapshot 
    ):boolean|Observable<boolean>|Promise<boolean>{
return component.exit();
}
}