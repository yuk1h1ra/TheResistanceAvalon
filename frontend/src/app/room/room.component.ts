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

    constructor(route: ActivatedRoute) { 
        this.roomId = route.snapshot.params['id'];
        this.socket = io('http://localhost:3000');
    }

  ngOnInit() {
  }

}
