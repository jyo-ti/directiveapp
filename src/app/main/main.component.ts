import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Observable } from 'rxjs';
import { ideactivateguard } from 'src/deactivate.guard.service';
import { dummyservice } from '../dummy.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit,ideactivateguard {

  constructor(private router:Router,private dummyservice:dummyservice) { 
    
  }

  about(){
    //this.router.navigate(['about']);
this.router.navigateByUrl('about');

  }

  ngOnInit(): void {
    this.dummyservice.printlog("hello from main componnet");
  }
exit(): boolean | Observable<boolean> | Promise<boolean> {
  if(confirm('Are you sure waanna exit')){
return true;
  }
 return false;
}
}
