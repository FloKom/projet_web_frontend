import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/userAuth.model';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user!:User
  authentifie:boolean = false
  constructor(public afAuth: AngularFireAuth, public http:HttpClient, private router: Router) { }

createNewUser(email:string , password:string){
    this.user = new User(email, password)
}

signInUser(email:string , password:string){
  
  this.createNewUser(email, password)
  this.http
    .post<any>('http://localhost:3000/auth/login', this.user )
    .subscribe(
      (reponse) => {
        console.log(reponse)
        this.user.userId=reponse.userId 
        this.user.token = reponse.token  
        this.authentifie = true
        this.router.navigate(['/sms'])
        
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    )
  
}

  signUp(email:string , password:string){
    this.createNewUser(email, password)
    this.http
    .post<any>('http://localhost:3000/auth/signup', this.user )
    .subscribe(
      (reponse) => {
        console.log(reponse)
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    )
  }
  
  ForgotPassword(passwordResetEmail:string) {

    
      return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      }).catch((error) => {
        window.alert(error)
      })
  }
  
  
  signOutUser(){  
    this.user = new User("","")
    this.router.navigate(['/auth/signin'])

  }

}
