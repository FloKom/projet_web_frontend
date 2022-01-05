import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { contact } from 'src/app/models/contact.model';
import { ContactManageService } from 'src/app/services/contact/contact-manage.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contactForm!: FormGroup;
  errorMessage!:String;
  fileIsUploading=false;
  fileUrl!:string;
  fileUploaded=false;

  constructor( private formBuilder: FormBuilder,
              private contactService: ContactManageService,
              private router: Router ) { 

              }

  ngOnInit(): void {
    this.initform();
  }

  initform(){
    this.contactForm= this.formBuilder.group(
      {
      firstname:['',[Validators.required]],
      lastname:['',[Validators.required]],
      phonenumber:['',[Validators.required]],
      profession:['',[Validators.required]],
      birthday:['',[Validators.required]], 
      });
  }

  onSaveContact(){
    const firstname = this.contactForm.get('firstname')?.value;
    const lastname = this.contactForm.get('lastname')?.value;
    const phonenumber = this.contactForm.get('phonenumber')?.value;
    const profession = this.contactForm.get('profession')?.value;
    const birthday = this.contactForm.get('birthday')?.value;
    const newContact = new contact(firstname,lastname,phonenumber,"",profession,birthday);
    if(this.fileUrl && this.fileUrl!=''){
      newContact.photo=this.fileUrl;
    }
    this.contactService.createNewContact(newContact);
    this.router.navigate(['/contacts']);
    console.log(newContact);
      }
    
    onUploadedFile(file : File){
      this.fileIsUploading=true;
      this.contactService.uploadFile(file).then(
        (url)=>{
          this.fileUrl=<string>url;
          this.fileIsUploading=false;
          this.fileUploaded=true;
        }
      );
    }

    detectFiles(event:any){
      this.onUploadedFile(event.target.files[0]);
    }

}

