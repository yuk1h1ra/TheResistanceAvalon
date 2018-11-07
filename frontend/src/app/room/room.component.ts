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
    message: string;

    constructor(route: ActivatedRoute,
                private chatService: ChatService) {
        this.roomId = route.snapshot.params['id'];
    }

    ngOnInit() {
        this.chatService.connect();
    }

    onSendMessage() {
        console.log("press send message: " + this.message);
        this.message = "";
    }

}
