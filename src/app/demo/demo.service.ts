import { HttpClient, HttpHeaders } from '@angular/common/http'
import {Injectable} from '@angular/core'
import { login } from './login';

@Injectable({providedIn:'root'})
export class demoservice{
constructor(private http:HttpClient){

}
login(f:{}){
return this.http.post<any>("https://localhost:44327/api/User/Authenticate",f);
}

isLogin(){
if(localStorage.getItem('token')){
    return true;
}
else{
    return false;
}
}

signup(f:{}){
    return this.http.post<any>('https://localhost:44327/api/User/Registration',f);

}
}