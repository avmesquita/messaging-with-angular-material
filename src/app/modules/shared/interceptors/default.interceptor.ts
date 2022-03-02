import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DefaultInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {  

    const request = req.clone({
      setHeaders: {
        'Cache-Control': 'public, must-revalidate, max-age=604800, s-maxage=604800, stale-if-error=86400, post-check=1, pre-check=1',
        'Pragma': 'cache',
        'Expires': '604800'
      }
    });      
    return next.handle(request);
  }
}