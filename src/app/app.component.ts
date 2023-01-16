import { Component, OnInit } from '@angular/core';
import { serviceauth } from 'src/auth.service';
import { userservice } from 'src/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private serv:serviceauth,private userservice:userservice){

  }
  ngOnInit(){
this.userservice.getdata.subscribe(x=>alert(x))
  }
  title = 'directiveapp';
  x:any;
  login(){
this.serv.login();
  }
  logout(){
this.serv.logout();
  }
  
}

