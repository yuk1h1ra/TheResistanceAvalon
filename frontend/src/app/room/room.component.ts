import { Component, OnInit, OnDestroy } from '@angular/core';
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
export class RoomComponent implements OnInit, OnDestroy {

    roomId: string;
    inputMsg: string = "";
    user: User;

    msgLog: Chat[] = [];

    constructor(route: ActivatedRoute,
                private chatService: ChatService,
                private userService: UserService) {
        this.roomId = route.snapshot.params['id'];
    }

    ngOnInit() {
        this.user = this.userService.getUser();
        this.user.joined = false;
        this.chatService.connect(this.roomId);
        this.chatService.onNewMessage()
            .subscribe(msg => {
                console.log(msg)
                this.msgLog.push(msg);
            });
    }

    ngOnDestroy() {
        // 通知
        var chat = new Chat()
        chat.message = this.user.name + "さんが退出しました";
        var gm = new User()
        gm.name = "GAME MASTER"
        chat.user = gm;
        this.chatService.emitChat(chat);
        this.user.joined = false;
    }

    onSendMessage() {
        if(this.inputMsg != ""){
            var chat = new Chat()
            chat.message = this.inputMsg;
            chat.user = this.user;
            this.chatService.emitChat(chat);
            this.inputMsg = "";
        }
    }

    joinRoom() {
        // 通知
        var chat = new Chat()
        chat.message = this.user.name + "さんが参加しました";
        var gm = new User()
        gm.name = "GAME MASTER"
        chat.user = gm;
        this.chatService.emitChat(chat);
        this.user.joined = true;
    }
}
