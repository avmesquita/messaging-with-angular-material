import { IContact } from "../interfaces/icontact.interface";
import { Message } from "./message.model";

export class Contact implements IContact {
    id: number;
    name: string;
    email: string;
    phone: string;
    photo: string;
    messages: Message[];    

    constructor() {
        this.id = 0;
        this.name = '';
        this.email = '';
        this.phone = '';
        this.photo = '';
        this.messages = [];
    }
}