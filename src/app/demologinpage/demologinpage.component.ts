import { Component, OnInit ,ComponentFactoryResolver, ViewChild, ViewContainerRef} from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { directivecomponentfactory } from 'src/directive/componentfactoryresolverdirective.directive';
import { AlertmodalComponent } from '../alertmodal/alertmodal.component';
import { demoservice } from '../demo/demo.service';

@Component({
  selector: 'app-demologinpage',
  templateUrl: './demologinpage.component.html',
  styleUrls: ['./demologinpage.component.css']
})
export class DemologinpageComponent implements OnInit {
  isLogin = true;
  error ='';
  @ViewChild('target', { read: ViewContainerRef }) target=ViewContainerRef;
  // @ViewChild(directivecomponentfactory) dcomponentFactoryResolver=ComponentFactoryResolver;
  constructor(private serv: demoservice,private componentFactoryResolver:ComponentFactoryResolver) { }

  ngOnInit(): void {
  }
  onSubmit(f: NgForm) {
    if (!this.isLogin) {
      this.serv.signup(f.value).subscribe(result => {
        alert(result.Message);
      }
        , error => {
          this.error=error.error.message;
         this.showerror();
        })
    }
    else {
      this.serv.login(f.value).subscribe(res => {
        alert(res.message);
        localStorage.setItem('token',res.token)
      }, error => {
        switch(error.error.message){
          case 'EMAIL_EXISTS':
            alert('EMAIL laredy exits');
        }
        
      })
    }
  }

  showerror(){
   const rr= this.componentFactoryResolver.resolveComponentFactory(AlertmodalComponent);
  }
  onSwitchMode() {
    this.isLogin = !this.isLogin;
  }
  getPasswordErrors(password: any) {
    if (password.errors?.required) {
      return 'Password is required'
    }
    else if (password.errors?.minlength) {
      return 'password should be of 5 characters'
    }
    return;
  }
}
