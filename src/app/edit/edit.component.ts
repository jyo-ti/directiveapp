import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ideactivateguard } from 'src/deactivate.guard.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit,ideactivateguard {
user:{id:number,name:string}={id:0,name:''}
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
   
    this.route.params.subscribe(x=>{
      this.user={
        id:x.id,
        name:x.name
      };
      
    })
  }
exit(): boolean | Observable<boolean> | Promise<boolean> {
  if(confirm('Are you sure waanna exit')){
    return true;
      }
     return false;
    }
  
}

