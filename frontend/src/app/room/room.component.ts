import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ChatService } from '../chat.service';
import { UserService } from '../user.service';

import { User } from '../user';
import { Chat } from '../chat';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

    roomId: string;
    inputMsg: string;
    user: User;

    msgLog: Chat[] = [];

    constructor(route: ActivatedRoute,
                private chatService: ChatService,
                private userService: UserService) {
        this.roomId = route.snapshot.params['id'];
        this.user = this.userService.getUser();
    }

    ngOnInit() {
        this.chatService.connect(this.roomId);
        this.chatService.onNewMessage()
            .subscribe(msg => {
                console.log(msg)
                this.msgLog.push(msg);
            });
    }

    onSendMessage() {
        var chat = new Chat()
        chat.message = this.inputMsg;
        chat.user = this.user;
        this.chatService.emitChat(chat);
        this.inputMsg = "";
    }

}
