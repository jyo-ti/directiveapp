import { Injectable} from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { userservice } from "./user.service";
export interface user{
    id:number;
    name:string;
}
@Injectable()
export class resolveservice implements Resolve<user>{
    constructor(private userservice:userservice){

    }
resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): user | Observable<user> | Promise<user> {
   const det=this.userservice.getUserData(route.params.id)
   return det;
}
}