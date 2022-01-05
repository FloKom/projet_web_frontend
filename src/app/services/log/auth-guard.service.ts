import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(public afAuth: AngularFireAuth,
              private router : Router) { }

   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
       
    return new Promise(
      (resolve, reject)=>{
        this.afAuth.onAuthStateChanged(
          (user)=>{
            if(user){
              resolve(true);
            }else{
              this.router.navigate(['/auth','signin'])
              resolve(false);
            }
          }
        );
      }
    );
  }
}
