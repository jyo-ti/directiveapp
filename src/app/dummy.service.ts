import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
//instance of lazy load module is different 
export class dummyservice {
    logmessage: any;
    printlog(message: any) {
        console.log(message);
        console.log(this.logmessage);
        this.logmessage = message;
    }
}