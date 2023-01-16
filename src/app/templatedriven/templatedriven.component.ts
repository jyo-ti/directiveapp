import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
@Component({
  selector: 'app-templatedriven',
  templateUrl: './templatedriven.component.html',
  styleUrls: ['./templatedriven.component.css']
})
export class TemplatedrivenComponent implements OnInit {
@ViewChild('f') template:any=NgForm; 
name='jyoti'
  constructor() { }
  onsubmit(){
    alert("hiii")
console.log(this.template);
  }
  checkdata(){
console.log(this.template)
  }
  fillvalues(){
this.template.form.setValue({
name:'sonu',
group:{
  age:'89',
  lastname:'prajapati6'
}
})
  }
  reset(){
    this.template.reset()
  }
fillpatchvalue(){
  this.template.form.patchValue({
    name:'kumarrr',
    group:{
      age:'900'
    }
  })
}
  ngOnInit(): void {
  }

}
