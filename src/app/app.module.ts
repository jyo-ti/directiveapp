import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {colorDir} from '../directive/colordirective.directive';
import {strucDire} from '../directive/structuraldirective.directive';
import {strucrenddir} from '../directive/rendererattributedirective.directive';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { AboutsComponent } from './abouts/abouts.component';
import { EditComponent } from './edit/edit.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { serviceauth } from 'src/auth.service';
import { guardservice } from 'src/auth.guard.service';
import { deactivate } from 'src/deactivate.guard.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditusergetdatausingresolveComponent } from './editusergetdatausingresolve/editusergetdatausingresolve.component';
import { userservice } from 'src/user.service';
import { resolveservice } from 'src/resolve.service';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { PipesComponent } from './pipes/pipes.component';
import { custompipe } from './pipes/custompipe.pipe';
import { filterpipe } from './pipes/filterpipe.pipe';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { httpservice } from './service/httpserv.service';
import { DatacomponentComponent } from './datacomponent/datacomponent.component';
import { interceptorhttp } from './interceptors/myinterceptor.interceptor';
import { secondinterceptor } from './interceptors/secondinterceptor.interceptor';
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
    AboutComponent,
    AboutsComponent,
    EditComponent,
    NotfoundComponent,
    EditusergetdatausingresolveComponent,
    TemplatedrivenComponent,
    ReactiveformComponent,
    PipesComponent,
    DatacomponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    ,FormsModule
    ,HttpClientModule
    ,ReactiveFormsModule
    
  ],
  //intercptors will execute in the same order they have provided
  providers: [{provide:HTTP_INTERCEPTORS,useClass:interceptorhttp,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:secondinterceptor, multi:true},
    serviceauth,guardservice,httpservice,deactivate,userservice,resolveservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
