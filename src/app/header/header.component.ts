import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../services/log/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuth!:boolean;
  constructor(private authService : AuthService,
              private afAuth: AngularFireAuth,
              ) { }

  ngOnInit(): void {
    this.afAuth.onAuthStateChanged(
      (user)=>{
        if(user){
          this.isAuth=true;
        }else{
          this.isAuth=false;
        }
      }
    );
  }

  onSignOut(){
    this.authService.signOutUser();
  }
}
