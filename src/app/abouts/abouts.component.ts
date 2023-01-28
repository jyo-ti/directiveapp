import { Component, OnInit } from '@angular/core';
import { dummyservice } from '../dummy.service';

@Component({
  selector: 'app-abouts',
  templateUrl: './abouts.component.html',
  styleUrls: ['./abouts.component.css']
})
export class AboutsComponent implements OnInit {

  constructor(private dummyservice:dummyservice) { }

  ngOnInit(): void {
    this.dummyservice.printlog("hello from abouts componnet")
  }

}
