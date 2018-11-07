import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

    constructor(
        private http: HttpClient,
        private router: Router
    ) { }

  ngOnInit() {
  }

  onCreateRoom(value: any) {
      this.http.post('http://localhost:3000/api/v1/createRoom', value)
          .subscribe(data => {
              this.router.navigate(["/room", data["createdRoom"]._id]);
          });
  }

}
