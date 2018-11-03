import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

    roomId: String;

    constructor(route: ActivatedRoute) { 
        this.roomId = route.snapshot.params['id'];
    }

  ngOnInit() {
  }

}
