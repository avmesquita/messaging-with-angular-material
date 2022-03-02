import { IMessage } from "./imessage.interface";

export interface IContact {
    id: number;
    name: string;
    email: string;
    phone: string;
    photo: string;
    messages: IMessage[];    
}