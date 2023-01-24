import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { httpservice } from '../service/httpserv.service';

@Component({
  selector: 'app-https',
  templateUrl: './https.component.html',
  styleUrls: ['./https.component.css']
})
export class HttpsComponent implements OnInit {
  Customer :FormGroup;

  constructor(private httpservice: httpservice) {
    this.Customer= new FormGroup({
      name: new FormControl(null, Validators.required),
      designation: new FormControl(null, Validators.required)
    })
   }
  onsubmit() {
    this.httpservice.post(this.Customer.value).subscribe(res => alert('saved'), (err: any) => console.log('jyoti', err));
  }
  ngOnInit(): void {
  }

}
