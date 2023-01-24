import { HttpEventType, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { tap } from 'rxjs/operators';
export class interceptorhttp implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler) {
        //if(request.url === 'http://localhost:6789/#/httppractice')
        console.log('my first interceptor');
        const requestupdated = request.clone({
            params: request.params.append('myparam', 'jyoyi'),
            headers: request.headers.append('myheader', 'myheadervalue')
        })
        //it will return observable so we can subscribe it
        return next.handle(requestupdated).pipe(tap((event) => {
            //type 0 means request has been sent
            console.log(event);
            if (event.type == HttpEventType.Response) {
                //type 4  means response has been received
                console.log('Response from interceptor  ' + event.type)
                console.log(event.body);
            }
        }))
    }
}