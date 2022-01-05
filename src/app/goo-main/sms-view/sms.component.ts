import { formatDate } from '@angular/common';
import { Component, LOCALE_ID, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { sms } from 'src/app/models/sms.model';
import { DiscussManageService } from 'src/app/services/discus/discuss-manage.service';
import { SmsManageService } from 'src/app/services/sms/sms-manage.service';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.css']
})
export class SmsComponent implements OnInit {

  ListSms:sms[]= [];

  constructor(
    private route : ActivatedRoute,
    private SmsService :SmsManageService,
    private DiscusService : DiscussManageService,
    private router : Router
  ) { }
  
  ngOnInit(): void {
    this.ListSms = this.DiscusService.ListSms;
    console.log(this.ListSms);
    
  }

  getSingleSms(id : number){
     return this.ListSms[id];
  }

}
