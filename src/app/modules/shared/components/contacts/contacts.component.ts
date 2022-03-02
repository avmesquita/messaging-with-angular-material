import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IContact } from '../../interfaces/icontact.interface';
import { PrivacyMessageService } from '../../services/privacy-message.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  allContacts: BehaviorSubject<IContact[]> = new BehaviorSubject<IContact[]>([]);
  allContacts$ = this.allContacts.asObservable();

  constructor(private privateMessageService: PrivacyMessageService) { 
    this.privateMessageService.getContacts().subscribe(contacts => {
      this.allContacts.next(contacts);
    });
  }

  ngOnInit(): void {
  }

}
