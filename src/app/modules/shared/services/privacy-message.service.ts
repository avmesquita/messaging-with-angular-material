import { MESSAGES_CONTAINER_ID } from '@angular/cdk/a11y';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IContact } from '../interfaces/icontact.interface';
import { IMessage } from '../interfaces/imessage.interface';

@Injectable({
  providedIn: 'root'
})
export class PrivacyMessageService {

  contacts: IContact[] = [
    {
      id: 1,
      name: 'Mother',
      email: 'mother@mother.com',
      phone: '+351 999999999',
      photo: '',
      messages: [
        {
        id: 1,
        sender: 'toMe',
        msg: 'Hi! How are you?',
        date: '2020-02-28'  
       },
       {
        id: 2,
        sender: 'fromMe',
        msg: 'I am fine and you?',
        date: '2020-02-28'  
       }       
      ]      
    },
    {
      id: 2,
      name: 'Father',
      email: 'father@father.com',
      phone: '+351 888888888',
      photo: '',
      messages: [
        {
          id: 3,
          sender: 'fromMe',
          msg: 'Hi, are you ok?',
          date: '2020-02-28'  
         },
         {
          id: 4,
          sender: 'toMe',
          msg: 'Yes, fine',
          date: '2020-02-28'  
         }         
      ]      
    },
    {
      id: 3,
      name: 'John Doe',
      email: 'john.doe@johndoe.com',
      phone: '+351 777777777',
      photo: '',
      messages: []
    }
  ];

  constructor() { }

  getContacts(): Observable<IContact[]> {
    return of(this.contacts);
  }

  getContactById(id: number): IContact | undefined {
    var kcontact = this.contacts.find(c => c.id.toString() === id.toString());
    return kcontact;
  }  

  sendMessage(kontact: IContact, newMessage: string) {
    if (kontact) {
      var chontact = this.contacts.find(c => c.id.toString() === kontact.id.toString());
      var newMessageObj: IMessage = {
        id: 0,
        sender: 'fromMe',
        msg: newMessage,
        date: new Date().toLocaleDateString()
      };
      if (chontact) 
        chontact.messages.push(newMessageObj);
    }
  }
}
