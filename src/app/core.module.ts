import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { guardservice } from "src/auth.guard.service";
import { serviceauth } from "src/auth.service";
import { deactivate } from "src/deactivate.guard.service";
import { resolveservice } from "src/resolve.service";
import { userservice } from "src/user.service";
import { interceptorhttp } from "./interceptors/myinterceptor.interceptor";
import { secondinterceptor } from "./interceptors/secondinterceptor.interceptor";
import { httpservice } from "./service/httpserv.service";

@NgModule({
    providers: [{provide:HTTP_INTERCEPTORS,useClass:interceptorhttp,multi:true},
        {provide:HTTP_INTERCEPTORS,useClass:secondinterceptor, multi:true},
        serviceauth,guardservice,httpservice,deactivate,userservice,resolveservice],  
})
export class coreModule{
}