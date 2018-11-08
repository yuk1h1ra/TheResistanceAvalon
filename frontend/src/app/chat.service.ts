import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

    constructor() { }

    private url = 'http://localhost:3000/ws/room';
    private socket;

    connect() {
        this.socket = io(this.url)
    }

    emitMessage(msg: string) {
        this.socket.emit('new-message', { message: msg });
    }

    onNewMessage() {
        return Observable.create(observer => {
            this.socket.on('new-message', msg => {
                console.log(msg);
                observer.next(msg);
            });
        });
    }
}
