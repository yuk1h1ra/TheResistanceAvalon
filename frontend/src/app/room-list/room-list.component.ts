import { Component, OnInit } from '@angular/core';
import { RoomService } from '../room.service';

import { Room } from '../room';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

    rooms: Room[];

  constructor(private roomService: RoomService) { }

  ngOnInit() {
      this.getRooms();
      console.log(this.rooms)
  }

  getRooms(): void {
        this.roomService.getRooms()
            .subscribe(rooms => console.log(rooms));
  }
}
