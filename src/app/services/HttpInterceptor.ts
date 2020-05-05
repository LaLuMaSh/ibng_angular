import {  HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Helper } from '../Helper';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
  constructor(private router: Router) {
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = Helper.loadToken();
    if (!req.url.match('/login') && !req.url.match('/register')) {
      if (!token) {
        this.router.navigateByUrl('/login');
      } else {
        return next.handle(req.clone({
          setHeaders: {
            ContentType: 'application/json; charset=utf-8',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }));
      }
    }
    return next.handle(req);
  }
}
