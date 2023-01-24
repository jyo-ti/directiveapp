import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { guardservice } from 'src/auth.guard.service';
import { deactivate } from 'src/deactivate.guard.service';
import { PipesComponent } from './pipes/pipes.component';
import { resolveservice } from 'src/resolve.service';
import { userservice } from 'src/user.service';
import { AboutComponent } from './about/about.component';
import { AboutsComponent } from './abouts/abouts.component';
import { EditComponent } from './edit/edit.component';
import { EditusergetdatausingresolveComponent } from './editusergetdatausingresolve/editusergetdatausingresolve.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { HttpsComponent } from './https/https.component';
import { DatacomponentComponent } from './datacomponent/datacomponent.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'main',component:MainComponent,canActivateChild:[guardservice]},
  {path:'abouts',component:AboutsComponent,canActivateChild:[guardservice],children:[
  {path:':id/:name',component:AboutComponent}
,{path:':id/:name/edit',component:EditComponent,canDeactivate:[deactivate]},
{path:':id/:name/editresove',component:EditusergetdatausingresolveComponent,resolve:{data:resolveservice}}]},
{path:'notfound',component:NotfoundComponent},
{path:'template', component:TemplatedrivenComponent},
{path:'Reactiveform',component:ReactiveformComponent},
{path:'pipe',component:PipesComponent},
{path:'httppractice',component:DatacomponentComponent},
{path:'**',redirectTo:'notfound'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
