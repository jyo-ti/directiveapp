import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  chk:any='jyotiprajapati';
  limit:any=9;
status:any;

xo:{name:string,date:any}={name:'',date:new Date()};
arr:any=[];
designation:any;
search:any;


  constructor() { }

  ngOnInit(): void {
    this.status=new Promise((resolve)=>{
  setTimeout(() => {
    resolve('getting asynchronous data');
  }, 6000);
    })
    this.xo={
      name:'jyoti',
      date:new Date(7,12,2023)
    }
  }
  adddata(f:NgForm){
this.arr.push(f.value);
  }
}
