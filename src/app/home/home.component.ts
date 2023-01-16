import { Component, OnInit } from '@angular/core';
import {interval, Subscription,Observable} from 'rxjs';
import {map,filter} from  'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
intervalsubs:Subscription=new Subscription;
  constructor(private route : ActivatedRoute) { 

  }

  ngOnInit(): void {
    this.route.data.subscribe(x=>alert(x));
  // this.intervalsubs= interval(1000).subscribe(count=>console.log(count))

  //  let o=Observable.create((data:any)=>{
  //   let dat1a=0;
  //   setInterval(
  //     ()=>{
  //       data.next(dat1a);
  //       dat1a++;
  //     }
  //     ,1000);
  //  })
  let o=Observable.create((x:any)=>{
    let count=0;
    setInterval(()=>{
      x.next(count);
      // if(count>6){
      //   x.error("count greater than 6 not allowed")
      // }
      // if(count>4){
      //   x.complete()
      // }
count++;
    },1000)
  });
const oo=o.pipe(filter((x:any)=>x>7)).pipe(map(kl=>kl+'vhjjj')).subscribe((x:any)=>console.log(x),(error:string)=>{
console.log(error)
},(complete:any)=>{
  console.log('complete')
})
this.intervalsubs=oo;//.pipe(take(7))
  }

  ngOnDestroy(){
this.intervalsubs.unsubscribe(); 
  }
}
