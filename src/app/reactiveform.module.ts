import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { dummyservice } from './dummy.service';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { sharedmodule } from './shared.module';
@NgModule({
    declarations: [
        ReactiveformComponent
    ],
providers:[
    
   dummyservice 
],
    imports: [
        CommonModule,
        sharedmodule,
        RouterModule.forChild([{ path: 'Reactiveform', component: ReactiveformComponent }]),
    ]
    , exports: [ReactiveformComponent]
})
export class reactiveformmodule {

}