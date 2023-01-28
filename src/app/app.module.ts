import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {colorDir} from '../directive/colordirective.directive';
import {strucDire} from '../directive/structuraldirective.directive';
import {strucrenddir} from '../directive/rendererattributedirective.directive';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { EditusergetdatausingresolveComponent } from './editusergetdatausingresolve/editusergetdatausingresolve.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { PipesComponent } from './pipes/pipes.component';
import { custompipe } from './pipes/custompipe.pipe';
import { filterpipe } from './pipes/filterpipe.pipe';
import { HttpClientModule } from '@angular/common/http';
import { DatacomponentComponent } from './datacomponent/datacomponent.component';
import { DemologinpageComponent } from './demologinpage/demologinpage.component';
import { AlertmodalComponent } from './alertmodal/alertmodal.component';
import { directivecomponentfactory } from 'src/directive/componentfactoryresolverdirective.directive';
import { usermodule } from './user.module';
import { reactiveformmodule } from './reactiveform.module';
import { sharedmodule } from './shared.module';
import { coreModule } from './core.module';
@NgModule({
  declarations: [
    AppComponent,
    colorDir,
    strucDire,
    custompipe,
    filterpipe,
    strucrenddir,
    HomeComponent,
    MainComponent,
    NotfoundComponent,
    EditusergetdatausingresolveComponent,
    TemplatedrivenComponent,
    PipesComponent,
    DatacomponentComponent,
    DemologinpageComponent,
    directivecomponentfactory,
    AlertmodalComponent,
    
  ],
  imports: [
    BrowserModule,
    coreModule,
    reactiveformmodule,
    AppRoutingModule
    ,HttpClientModule,
    sharedmodule,
  ],
  //intercptors will execute in the same order they have provided

  bootstrap: [AppComponent]
})
export class AppModule { }
