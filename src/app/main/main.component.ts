import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Observable } from 'rxjs';
import { ideactivateguard } from 'src/deactivate.guard.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit,ideactivateguard {

  constructor(private router:Router) { 
    
  }

  about(){
    //this.router.navigate(['about']);
this.router.navigateByUrl('about');

  }

  ngOnInit(): void {
  }
exit(): boolean | Observable<boolean> | Promise<boolean> {
  if(confirm('Are you sure waanna exit')){
return true;
  }
 return false;
}
}
