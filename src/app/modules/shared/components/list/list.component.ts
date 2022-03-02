import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { IContact } from '../../interfaces/icontact.interface';
import { PrivacyMessageService } from '../../services/privacy-message.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  contacts: BehaviorSubject<IContact[]> = new BehaviorSubject<IContact[]>([]);
  contacts$ = this.contacts.asObservable();

  constructor(private privateMessageService: PrivacyMessageService,
              private router: Router) {
    this.privateMessageService.getContacts().subscribe(contacts => {
      this.contacts.next(contacts);
    });
  }   

  allContacts() {
    this.router.navigate(['/contacts']);
  }
}
