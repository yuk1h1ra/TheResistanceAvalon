import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ChatService } from '../chat.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

    roomId: string;
    inputMsg: string;

    constructor(route: ActivatedRoute,
                private chatService: ChatService) {
        this.roomId = route.snapshot.params['id'];
    }

    ngOnInit() {
        this.chatService.connect();
        this.chatService.onNewMessage()
    }

    onSendMessage() {
        this.chatService.emitMessage(this.inputMsg);
        this.inputMsg = "";
    }

}
