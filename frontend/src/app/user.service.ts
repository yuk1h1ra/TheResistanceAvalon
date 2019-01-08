import { Injectable } from '@angular/core';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    user: User;

    constructor() {
        this.user = new User();
        this.user.name = "Player"
    }

    public setUserName(name) {
        this.user.name = name;
    }

    public getUser() {
        return this.user;
    }
}
