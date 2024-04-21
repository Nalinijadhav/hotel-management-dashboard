import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'; // Import the LoginComponent
import { DashboardComponent } from './dashboard/dashboard.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { GuestListComponent } from './guest-list/guest-list.component';
import { RoomListComponent } from './room-list/room-list.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/hotel-list', component: HotelListComponent},
  { path: 'dashboard/booking-list', component: BookingListComponent},
  { path: 'dashboard/guest-list', component: GuestListComponent},
  { path: 'dashboard/room-list', component: RoomListComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
