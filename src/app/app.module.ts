import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { GooMainComponent } from './goo-main/goo-main.component';
import { DiscusViewComponent } from './goo-main/discus-view/discus-view.component';
import { ContactViewComponent } from './goo-main/contact-view/contact-view.component';
import { ContactFormComponent } from './goo-main/contact-form/contact-form.component';
// import { SmsViewComponent } from './goo-main/sms-view/sms-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuardService } from './services/log/auth-guard.service';
import { AuthService } from './services/log/auth.service';
import { SmsManageService } from './services/sms/sms-manage.service';
import { ContactManageService } from './services/contact/contact-manage.service';
import { DiscussManageService } from './services/discus/discuss-manage.service';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './goo-main/contact-list/contact-list.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { HeaderComponent } from './header/header.component';
import { SmsComponent } from './goo-main/sms-view/sms.component';
import {NgxMaskModule} from 'ngx-mask';
import { AuthInterceptor } from './services/interceptor.service';
const appRoutes: Routes = [
  {path: 'auth/signup' , component: SignUpComponent },
  {path: 'auth/signin' , component: SignInComponent },
  {path: 'auth/resetpassword' , component: ResetPasswordComponent },
  {path: 'Goosms' ,  component: GooMainComponent},
  {path: 'GooSMS' ,  component: ContactListComponent},
  {path: 'contacts', component: ContactListComponent},
  {path: 'sms' , component: GooMainComponent},
  {path: 'sms/:id' , component: GooMainComponent},
  // {path: 'sms',component: SmsComponent},
  {path: 'contacts/new', canActivate:[AuthGuardService], component: ContactFormComponent},
  {path:'contacts/view/:id', canActivate:[AuthGuardService], component:ContactViewComponent },
  {path: '', redirectTo: 'auth/signin', pathMatch: 'full'},
  {path: '**', redirectTo: 'auth/signin' }
];

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    GooMainComponent,
    DiscusViewComponent,
    ContactViewComponent,
    ContactFormComponent,
    // SmsViewComponent,
    ContactListComponent,
    ResetPasswordComponent,
    HeaderComponent,
    SmsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    NgxMaskModule.forRoot()
  ],
  providers: [
    AuthGuardService,
    AuthService,
    SmsManageService, 
    ContactManageService,
    DiscussManageService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
