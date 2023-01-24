import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { customer } from 'src/interfaces/customer';

@Injectable()

export class httpservice {
    constructor(private http: HttpClient) {

    }
    post(f:customer): Observable<any> {
        const headers = new HttpHeaders({
            'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJwcmlzaGEyMDE5IiwiY29tcGFueU5hbWUiOiJsZXRzcCIsImV4cCI6MTY3NDM3ODE2MywiaXNzIjoianlvdGkiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjQyMDAifQ.2uZPWBJohivwRIn760cWDvTLHOjPijCHtOJsqQEdKLA'
        })
        ;
        return this.http.post<customer>('https://localhost:44327/api/customer/', f, { headers,observe:'body' });
    }

    get(){
        const head=new HttpHeaders({
           'custom-head' :'jyoti'
        })
        const param=new HttpParams().set('id',1)
        return this.http.get<any>('https://dummy.restapiexample.com/api/v1/employees',{headers:head,params:param})
    }
}

