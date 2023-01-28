import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { guardservice } from "src/auth.guard.service";
import { deactivate } from "src/deactivate.guard.service";
import { resolveservice } from "src/resolve.service";
import { AboutComponent } from "./about/about.component";
import { AboutsComponent } from "./abouts/abouts.component";
import { EditComponent } from "./edit/edit.component";
import { EditusergetdatausingresolveComponent } from "./editusergetdatausingresolve/editusergetdatausingresolve.component";
const route:Route[]=[
    {
        path: '', component: AboutsComponent, canActivateChild: [guardservice], children: [
          { path: ':id/:name', component: AboutComponent },
          { path: ':id/:name/edit', component: EditComponent, canDeactivate: [deactivate] },
          { path: ':id/:name/editresove', component: EditusergetdatausingresolveComponent, resolve: { data: resolveservice } }]
      },
]

@NgModule({
    imports:[
        RouterModule.forChild(route)
    ],
    exports:[RouterModule]
})
export class userroutingmodule{

}