import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onCreateRoom(value: any) {
      console.log(value);
      this.http.post('http://localhost:3000/api/v1/createRoom', value)
        .subscribe();
  }

}
