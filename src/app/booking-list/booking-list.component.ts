import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {
  bookings: any[] = []; // Array to store hotel data

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Fetch hotel data from the backend API
    this.http.get<any[]>('http://localhost:1337/bookings')
      .subscribe(
        response => {
          // Store the retrieved hotel data in the hotels array
          this.bookings = response;
        },
        error => {
          console.error('Error fetching hotel data:', error);
        }
      );
  }
}
