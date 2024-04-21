import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  hotels: any[] = []; // Array to store hotel data

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Fetch hotel data from the backend API
    this.http.get<any[]>('http://localhost:1337/hotels')
      .subscribe(
        response => {
          // Store the retrieved hotel data in the hotels array
          this.hotels = response;
        },
        error => {
          console.error('Error fetching hotel data:', error);
        }
      );
  }
}
