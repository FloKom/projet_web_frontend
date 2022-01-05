import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './log/auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    
    constructor(private authservice: AuthService, private router: Router){}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(this.authservice.user == undefined || this.authservice.user.token == undefined){
        this.router.navigate(['/auth/signin'])
    }
    req = req.clone({
      setHeaders: {
        'Content-Type' : 'application/json; charset=utf-8',
        'Accept'       : 'application/json',
        'Authorization': `Bearer ${this.authservice.user.token}`,
      },
      body: {
        ...req.body,
        idUser: this.authservice.user.userId
     }
    });
    console.log("request to send", req)

    return next.handle(req);
  }
}