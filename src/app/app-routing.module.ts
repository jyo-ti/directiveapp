import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { guardservice } from 'src/auth.guard.service';
import { PipesComponent } from './pipes/pipes.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { DatacomponentComponent } from './datacomponent/datacomponent.component';
import { DemologinpageComponent } from './demologinpage/demologinpage.component';
import { demoCanActivate } from './demo/democanActivate.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'abouts',loadChildren:()=>import('./user.module').then(x=>x.usermodule)},
  { path: 'main', component: MainComponent, canActivateChild: [guardservice] },
  { path: 'notfound', component: NotfoundComponent },
  { path: 'template', component: TemplatedrivenComponent },
  { path: 'pipe', component: PipesComponent },
  { path: 'httppractice', component: DatacomponentComponent, canActivate: [demoCanActivate] },
  { path: 'demologin', component: DemologinpageComponent },
  { path: '**', redirectTo: 'notfound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
