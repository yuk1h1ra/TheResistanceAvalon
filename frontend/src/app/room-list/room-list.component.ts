import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
      this.getRooms();
  }

  getRooms(): void {
    this.http.get('http://localhost:3000/api/v1/searchRoom')
        .subscribe(res => console.log(res));
  }
}
