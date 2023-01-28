
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AboutsComponent } from './abouts/abouts.component';
import { dummyservice } from './dummy.service';
import { EditComponent } from './edit/edit.component';
import { sharedmodule } from './shared.module';
import { userroutingmodule } from './user-routing.module';

@NgModule({
    declarations: [
        AboutComponent,
        AboutsComponent,
        EditComponent,
    ],providers:[
    
        dummyservice 
     ],
    imports: [
        userroutingmodule,
        sharedmodule
    ]
    , exports: [
        AboutComponent,
        AboutsComponent,
        EditComponent,
    ]
})
export class usermodule {

}