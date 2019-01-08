import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopComponent } from "./top/top.component";
import { CreateComponent } from "./create/create.component";
import { RoomListComponent } from "./room-list/room-list.component";
import { RoomComponent } from "./room/room.component";
import { UserComponent } from "./user/user.component";

const routes: Routes = [
    { path: '', redirectTo: '/top', pathMatch: 'full' },
    { path: 'top', component: TopComponent },
    { path: 'create', component: CreateComponent },
    { path: 'search', component: RoomListComponent },
    { path: 'user', component: UserComponent },
    { path: 'room/:id', component: RoomComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
