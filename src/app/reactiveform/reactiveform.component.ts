import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormArray, Validators, AsyncValidatorFn} from '@angular/forms';
import {Observable} from 'rxjs'
import { dummyservice } from '../dummy.service';
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  users=['jyoti','sonu']
  get extracontrols(){
    return (<FormArray>this.reactiveform.controls.extra).controls;
  }
  get hobbiescontrols(){
return (<FormArray>this.reactiveform.get('hobbies')).controls;
  }

  
reactiveform = new FormGroup(
  {
    name:new FormControl(null,[Validators.required,this.isrestrciedname.bind(this)]),
    email:new FormControl(null,[Validators.required],this.isrestrciedEmail as AsyncValidatorFn),
    useragegender:new FormGroup({
    age:new FormControl(),
    gender:new FormControl('female')}
    ),
    hobbies:new FormArray([])
    ,extra:new FormArray([])
  }
)
addHobby(){
(<FormArray>this.reactiveform.get('hobbies')).push(new FormControl(null,Validators.required));
console.log(this.reactiveform);
}
onSubmit(){
 console.log(this.reactiveform);
}
extra(){
  (<FormArray>this.reactiveform.controls.extra).push(new FormControl());
}
isrestrciedname(control:FormControl):{[s:string]:boolean}|null{
if(this.users.includes(control.value)){
  return {x:true}
}
return null;
}

reset(){
  this.reactiveform.reset();
}
  constructor(private dummyservice:dummyservice) {

   }

  ngOnInit(): void {
    this.dummyservice.printlog("hello from reactive form");
    this.reactiveform.statusChanges.subscribe(value=>console.log(value))
    this.reactiveform.setValue({
      name:'jyo',
      
      useragegender:{
        age:89,gender:'male'
      },
      extra:[],
      hobbies:[],
      email:'te4st@gmail.com'
    })

    this.reactiveform.patchValue({
      name:'jyiyuyuyu'
    })

  }

  isrestrciedEmail(control:FormControl):Promise<any>|Observable<any>{
let p= new Promise((resolve,reject)=>{
setTimeout(()=>{
if(control.value==='test@gmail.com'){
  resolve({x:true})
}
resolve(null);
},4000)
})
return p;
  }
}
