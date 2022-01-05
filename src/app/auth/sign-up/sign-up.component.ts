import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/log/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  
  signUpForm!: FormGroup;
  errorMessage!:String;

  constructor( private formBuilder: FormBuilder,
              private authservice: AuthService,
              private router: Router ) { 

              }

  ngOnInit(): void {
    this.initform();
  }

  initform(){
    this.signUpForm= this.formBuilder.group(
      {
       email:['',[Validators.required, Validators.email]],
       password:['',[Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]], 
      });
  }

  onSubmit(){
    const email = this.signUpForm.get('email')?.value;
    const password = this.signUpForm.get('password')?.value;
    this.authservice.signUp(email, password)
    
  }

}
