import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import * as io from 'socket.io-client';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

    roomId: String;
    private socket;

    constructor(route: ActivatedRoute) { 
        this.roomId = route.snapshot.params['id'];
    }

  ngOnInit() {
      this.socket = io('http://localhost:3000/ws/room');
  }

}
