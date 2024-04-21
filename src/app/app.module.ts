import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoomListComponent } from './room-list/room-list.component';
import { GuestListComponent } from './guest-list/guest-list.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { HotelListModule } from './hotel-list/hotel-list.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RoomListComponent,
    GuestListComponent,
    BookingListComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HotelListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
