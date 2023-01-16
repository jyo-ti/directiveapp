import {OnInit,Injectable} from '@angular/core'

import { Subject } from "rxjs"
@Injectable()
export class userservice {
    getdata=new Subject<string>();

    constructor(){
        
    }

    addSubjectdata(){

        this.getdata.next("hiiiiiiii");
    }

    getUserData(id:number){
if(id==1){
    return {
        id:786,
        name:'ghg'
    }
}
else{
    return {
        id:9000,
        name:'hghgh'
    }
}
    }


}