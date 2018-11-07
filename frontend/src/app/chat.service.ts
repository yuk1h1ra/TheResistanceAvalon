import { Injectable } from '@angular/core';
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
}
