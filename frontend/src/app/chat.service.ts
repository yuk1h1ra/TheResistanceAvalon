import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

    constructor() { }

    private url = 'http://localhost:3000';
    private socket;
    private room_id;

    connect(room_id) {
        this.room_id = room_id
        this.socket = io(this.url)
        this.socket.emit('join', room_id)
    }

    emitMessage(msg: string) {
        this.socket.emit('new-message', { message: msg, room_id: this.room_id });
    }

    public onNewMessage = () => {
        return Observable.create((observer) => {
            this.socket.on('new-message', (msg) => {
                observer.next(msg);
            });
        });
    }
}
