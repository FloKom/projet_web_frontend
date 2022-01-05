import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { contact } from 'src/app/models/contact.model';
import { ContactManageService } from 'src/app/services/contact/contact-manage.service';
@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.css']
})
export class ContactViewComponent implements OnInit {

  myContact!:contact;

  constructor( private route : ActivatedRoute,
              private ContactsService :ContactManageService,
              private router : Router) { }


  ngOnInit(): void {
    this.myContact = new contact('','',0,'','',undefined);
    const id = this.route.snapshot.params['id'];
    this.ContactsService.getSingleContact(+id)
    // .then(
    //   (myCont:any)=>{
    //     this.myContact = <contact> myCont;
    //   }
    // );
  }

  onBack(){
    this.router.navigate(['/conctacts']);
  }


}
