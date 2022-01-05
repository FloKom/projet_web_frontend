import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/log/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  
  passwordResetEmail!: string ;
  constructor( private formBuilder: FormBuilder,
              private authservice: AuthService,
              private router: Router ) { 

              }

  ngOnInit(): void{
 
    this.resetpassword(this.passwordResetEmail);
  }

  resetpassword(email:string){
    this.authservice.ForgotPassword(email);
  }

}
