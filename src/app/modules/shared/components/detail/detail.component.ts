import { TEXT_COLUMN_OPTIONS } from '@angular/cdk/table';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IContact } from '../../interfaces/icontact.interface';
import { Contact } from '../../models/contact.model';
import { PrivacyMessageService } from '../../services/privacy-message.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  contact?: IContact;
  id: number = 0;

  newMessage: string = '';
  
  constructor(private router: ActivatedRoute, 
              private privateMessageService: PrivacyMessageService) {
    this.contact = new Contact();      
  }

  ngOnInit(): void {    
    this.router.params.subscribe( paramMap => {      
      this.setId(paramMap.id);      
    });
  }

  setId(id: number) {
    this.contact = this.privateMessageService.getContactById(id);    
  }

  sendMessage() {
    if (this.contact) {
      this.privateMessageService.sendMessage(this.contact, this.newMessage);
      this.newMessage = '';   
    }
  }

}
