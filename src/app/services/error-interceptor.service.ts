import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      retry(1),
      catchError((err) => {
        if(err.status === 401){
          //refresh token ot navigate to login
          alert("401");
        }
        else if(err.status === 404){
          //some custom message
          alert("404");
        }
        else if(err.status === 400){
          //some message
          alert("400");
        }
        else {
          //global message for error -eturnal surver error or something like that
          alert("500");
        }

        return throwError(() => err);
      })
      )

  }
}
