import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopComponent } from "./top/top.component"
import { CreateComponent } from "./create/create.component"
import { RoomListComponent } from "./room-list/room-list.component"

const routes: Routes = [
    { path: '', redirectTo: '/top', pathMatch: 'full' },
    { path: 'top', component: TopComponent },
    { path: 'create', component: CreateComponent },
    { path: 'search', component: RoomListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
