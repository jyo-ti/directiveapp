import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  array=[4,5,,6,6,6,6]
about:{id:number,name:string}={id:0,name:''};
about1:{chk:number,search:string}={chk:0,search:''};
fragment:any;
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
   this.about={
    id: this.route.snapshot.params.id,
    name:this.route.snapshot.params.name,
    
   }
   this.fragment=this.route.snapshot?.fragment;
this.about1={
  chk:this.route.snapshot.queryParams.idd,
    search:this.route.snapshot.queryParams.search
}
   this.route.params.subscribe(x=>{
    this.about={
      id:x.id,
      name:x.name,
      
    }
   })

   this.route.queryParams.subscribe(x=>{
    this.about1={
    chk:x.idd,
    search:x.search
   }
   })

   this.route.fragment.subscribe(x=>{
    this.fragment=x
   })
  }
  
  editdata(){
this.router.navigate(['/abouts',90,'terfdh','edit'],{queryParamsHandling:'preserve'})
  }

  getDetails(){
  this.router.navigate(['/about',342,'random'],
  {queryParams:{idd:9000,search:3837},fragment:'dgdg'},
  )
  }
}
