import { IMessage } from "../interfaces/imessage.interface";

export class Message implements IMessage {
    id: number;
    sender: string;    
    msg: string;
    date: string;

    constructor() {
        this.id = 0;
        this.sender = '';    
        this.msg = '';
        this.date = '';
    }
}