import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editusergetdatausingresolve',
  templateUrl: './editusergetdatausingresolve.component.html',
  styleUrls: ['./editusergetdatausingresolve.component.css']
})
export class EditusergetdatausingresolveComponent implements OnInit {
x:{id:number,name:string}={name:'',id:0}
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
   this.route.data.subscribe(x=>{

    this.x.id=x.id;
    this.x.name=x.name;
   })
  }

}
