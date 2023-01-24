import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { customer } from 'src/interfaces/customer';
import { httpservice } from '../service/httpserv.service';
import {tap} from 'rxjs/operators';
@Component({
  selector: 'app-datacomponent',
  templateUrl: './datacomponent.component.html',
  styleUrls: ['./datacomponent.component.css']
})
export class DatacomponentComponent implements OnInit {
  mydata:any=[];
  customer = new FormGroup({
    name: new FormControl(),
    designation: new FormControl()
  })
  constructor(private https: httpservice) { }

  ngOnInit(): void {
  }
getdata(){
  this.https.get().subscribe(x=>{
this.mydata=x.data;
  })
}
  click() {
    this.https.post(this.customer.value).pipe(tap(x=>console.log('jyotiii  ',x ))).subscribe(res => {
      alert('saved');
    }, error => {
      console.log(error)
    })
  }
}
