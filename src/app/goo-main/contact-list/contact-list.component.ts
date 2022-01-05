import { Component, OnInit ,OnDestroy, Output,EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { contact } from 'src/app/models/contact.model';
import { ContactManageService } from 'src/app/services/contact/contact-manage.service';
import { DiscussManageService } from 'src/app/services/discus/discuss-manage.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit, OnDestroy {

  contacts!: contact[];
  contactsSubscription!: Subscription; 
  @Output() contactListEvent = new EventEmitter<contact>();
  
  constructor(private contactsService : ContactManageService, 
              private discusService : DiscussManageService,
              private router : Router ) {
               
               }

  ngOnInit(): void {
    this.contactsSubscription = this.contactsService.contactSub.subscribe(
      (contacts : contact[])=>{
        this.contacts = contacts; 
        console.log(this.contacts);
      }
    );
    this.contactsService.getContacts(); 
    this.contactsService.emitContacts();  
   
  }

  onNewContact(){
    this.router.navigate(['/contacts','new']);
  }
  onDeleteContact(contact:contact){
    this.contactsService.removeContact(contact);
  }
  onViewContact(id : number){
    this.router.navigate(['/contacts', 'view', id ]);
  }
  selectContact(id : number){
    this.discusService.storeContact=this.contacts[id];
    this.router.navigate(['/sms', id ]);
  }
  onViewDiscuss(id : number){
    this.router.navigate(['/sms', id ]);
  }

  ngOnDestroy(){
     this.contactsSubscription.unsubscribe;
  }
  lunchPopup(){
    
  }
}
