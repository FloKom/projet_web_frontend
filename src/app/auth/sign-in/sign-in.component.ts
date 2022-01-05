import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/log/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signInForm!: FormGroup;
  errorMessage!:String;

  constructor( private formBuilder: FormBuilder,
              private authservice: AuthService,
              private router: Router ) { 

              }

  ngOnInit(): void {
    this.initform();
  }

  initform(){
    this.signInForm= this.formBuilder.group(
      {
       email:['',[Validators.required, Validators.email]],
       password:['',[Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]], 
      });
  }

  onSubmit(){
    const email = this.signInForm.get('email')?.value;
    const password = this.signInForm.get('password')?.value;
    this.authservice.signInUser(email, password)
    if(this.authservice.authentifie){
      this.router.navigate(['/sms']);
    }
  }


}
