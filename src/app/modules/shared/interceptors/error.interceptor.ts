import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private router: Router) { 
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {                           
            if (err.status === 401) {                                
                this.router.navigate(["/"]);
            }

            //const result = concat(of(7), throwError(new Error('oops!')));
            //result.subscribe(x => console.log(x), e => console.error(e));            

            const error = err.error || err.statusText;
            return throwError(error);
        }))
    }
}
