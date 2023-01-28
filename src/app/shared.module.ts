import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { dummyservice } from "./dummy.service";
import { SharedcomComponent } from "./sharedcom/sharedcom.component";

@NgModule({
    declarations: [SharedcomComponent],
    imports: [
        FormsModule
        , ReactiveFormsModule],
    exports: [SharedcomComponent
        , FormsModule
        , ReactiveFormsModule],
})
export class sharedmodule {

}