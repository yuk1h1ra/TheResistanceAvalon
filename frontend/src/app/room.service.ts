import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Room } from './room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http: HttpClient) { }

    getRooms() {
        return this.http.get<Room[]>('http://localhost:3000/api/v1/searchRoom');
    }
}
