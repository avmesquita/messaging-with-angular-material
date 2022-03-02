import { Component, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IContact } from '../../interfaces/icontact.interface';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {

  @Input() contact: IContact;

  @HostListener('click', ['$event'])
  onClick() {
     this.router.navigate(['details', this.contact.id], { skipLocationChange: true });
  }

  constructor(private router: Router) {
    this.contact = new Contact();
  }
}
