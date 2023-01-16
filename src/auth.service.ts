export class serviceauth{
    login_ =false;
    login(){
         this.login_=true;
         return this.login_;
    }

    logout(){
        this.login_=false;
        return this.login_ ;
    }

    login1(){
        return new Promise((resolve,reject)=>{
setTimeout(()=>{
resolve(this.login_);
},4000)
        })
       // return  this.login_;
    }
}