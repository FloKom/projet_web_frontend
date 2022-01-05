import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { Subject } from 'rxjs';
import { contact } from 'src/app/models/contact.model';
import { sms } from 'src/app/models/sms.model';
import { HttpClient } from '@angular/common/http';
import { discussion } from 'src/app/models/discuss.model';

@Injectable({
  providedIn: 'root'
})
export class DiscussManageService {

  ListSms:sms[]= [];
  storeContact!:contact;
  contacts: contact[] = []; 
  contactSub = new Subject<contact[]>();
    constructor(private afdBase: AngularFireDatabase,
              public firestore : AngularFireStorage,
              private http: HttpClient
            ) { }

  saveDiscuss(){
    
  }

  getDiscuss(){
    return this.storeContact;
  }

  deleteDiscuss(){

  }

  onSaveSms(id:any, discuss:  {endpoint:Date, sms:{content:String, type_send:Boolean, type_rcept:Boolean, date_send:Date}[] } ) {

    this.http
     .put<any>('http://localhost:3000/contacts/' + id , discuss)
     .subscribe(
       (reponse) => {
         console.log(reponse);
       },
       (error) => {
         console.log('Erreur sur enregistrement de la discussion ! : ' + error);
       }
     )

  }
  
  getSms(mySms : sms ){
      this.ListSms.push(mySms);
      return this.ListSms;
    }
  
}
